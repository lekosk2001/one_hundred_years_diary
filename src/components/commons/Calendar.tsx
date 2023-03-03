import { moodImoge } from "@/utils/moodImoge"
import dayjs, { Dayjs } from "dayjs"
import { useRouter } from "next/router"
import { Data } from '@/components/units/list/dataType';
import * as S from './Calendar_style'

interface Props {
    currentYear: number;
    month: number;
    diaryData: Data[];
}

const Calendar = (props: Props) => {
    const router = useRouter();

    const allDays = [];
    const today = dayjs();
    const day = dayjs().year(props.currentYear).startOf("year").month(props.month)

    const onClickDate = (day: Dayjs) => {
        router.push(`/${day.format("YYYY")}/${day.format("MM-DD")}`)
    }

    for (let index = 0; index < day.startOf("month").day(); index++) {
        allDays.push(<S.DayBlockBlank key={day.format() + index} >
        </S.DayBlockBlank>)
    }

    for (let index = 0; index < Number(day.endOf("month").format("DD")); index++) {

        const eachDay = dayjs(`${day.year()}-${day.month() + 1}-${1 + index}`)
        const isToday = today.isSame(eachDay, "date")

        allDays.push(<S.DayBlock
            key={eachDay.format()}
            style={{
                backgroundColor: isToday ? "var(--background-today-color)" : "",
            }}
            onClick={() => onClickDate(eachDay)}
        >
            <S.DayBlockNumber
                style={{
                    color: eachDay.day() === 0 ? "red" : "",
                }}>
                {eachDay.date()}
            </S.DayBlockNumber>
            <S.Imoge>{moodImoge(props.diaryData.filter((diary) => { return diary.date === eachDay.format("YYYY-MM-DD") })[0]?.mood)}</S.Imoge>
        </S.DayBlock>)
    }

    if (allDays.length <= 28) {
        allDays.push(<S.DayBlockBlank key={day.format() + "1"} />)
    }

    return (
        <S.MonthContainer>
            <S.MonthTitle>
                <S.CurrentYearMini>{props.currentYear}</S.CurrentYearMini>
                {props.month + 1}
            </S.MonthTitle>
            <S.DayBlockContainer>
                {allDays}
            </S.DayBlockContainer>
        </S.MonthContainer>
    )
}

export default Calendar