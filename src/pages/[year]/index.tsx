import * as S from '@/styles/common_style'
import { Button } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { useRouter } from 'next/router'
import 'dayjs/locale/ko';
import { CalendarOutlined, CaretLeftOutlined, CaretRightOutlined, ClockCircleOutlined, LeftOutlined, PicLeftOutlined, RightOutlined } from '@ant-design/icons';

type Props = {}

const Year = (props: Props) => {

    dayjs.locale('ko');
    const router = useRouter()
    const CurrentYear = Number(router.query.year)
    if (!CurrentYear) { return <></> }

    const onClickDate = (day: Dayjs) => {
        router.push(`/${day.format("YYYY")}/${day.format("MM-DD")}`)
    }

    const today = dayjs()

    const Calendar = (day: Dayjs) => {
        const allDays = []

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
                    backgroundColor: isToday ? "#ffffd9" : "",
                }}
                onClick={() => onClickDate(eachDay)}
            >
                <S.DayBlockNumber style={{
                    color: eachDay.day() === 0 ? "red" : "",
                }}>
                    {eachDay.date()}
                </S.DayBlockNumber>
                {/* <S.Imoge>😰</S.Imoge> */}

            </S.DayBlock>)
        }

        if (allDays.length <= 28) {
            allDays.push(<S.DayBlockBlank key={day.format() + "1"} />)
        }

        return allDays
    }

    const fullCalendar = []
    for (let index = 0; index < 12; index++) {
        fullCalendar.push(
            <S.MonthContainer key={index}>
                <S.MonthTitle>
                    <S.CurrentYearMini>{CurrentYear}</S.CurrentYearMini>
                    {index + 1}
                </S.MonthTitle>
                <S.DayBlockContainer>
                    {Calendar(dayjs().year(CurrentYear).startOf("year").month(index))}
                </S.DayBlockContainer>
            </S.MonthContainer>
        )
    }
    return (
        <>

            <S.Title>{CurrentYear + "년"}
                {CurrentYear === today.year() && <S.TodayInfo>
                    {"오늘은 " + today.format("YYYY년 MM월 DD일 dddd입니다.")}
                </S.TodayInfo>}
                {CurrentYear < today.year() && <S.TodayInfo>
                    {"오늘로부터 " + (today.year() - CurrentYear) + "년 전입니다."}
                </S.TodayInfo>}

                {CurrentYear > today.year() && <S.TodayInfo>
                    {"오늘로부터 " + (CurrentYear - today.year()) + "년 후입니다."}
                </S.TodayInfo>}
            </S.Title>

            <S.ButtonsWrapper>
                <Button onClick={() => { router.push(`/${CurrentYear - 1}`) }}>
                    <CaretLeftOutlined /> 지난 해
                </Button>
                <Button onClick={() => { router.push(`${dayjs().year()}`) }}>
                    <CalendarOutlined /> 올해
                </Button>

                <Button onClick={() => { router.push(`/${CurrentYear + 1}`) }}>다음 해 <CaretRightOutlined /></Button>
            </S.ButtonsWrapper>

            <S.CalendarContainer>
                {fullCalendar}
            </S.CalendarContainer>
        </>
    )
}

export default Year
