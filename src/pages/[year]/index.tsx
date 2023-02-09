import * as S from '@/styles/common_style'
import { Button } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { useRouter } from 'next/router'
import 'dayjs/locale/ko';
import { CalendarOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../_app';
import { moodImoge } from '@/commons/moodImoge';

dayjs.locale('ko');
interface Data {
    contents: string
    createdAt: string
    mood: string
    date: string
    id: string
}

const Year = () => {

    const [diaryData, setDiaryData] = useState<Data[]>([])
    const router = useRouter()
    const CurrentYear = Number(router.query.year)

    const petchDiary = async () => {
        const dataArray: Data[] = []
        const result = await getDocs(query(collection(db, "Diary"), orderBy("createdAt", "desc")));

        result.docs.map((doc: DocumentData) => { dataArray.push({ ...doc.data(), id: doc.id }) });
        setDiaryData(dataArray)
    }

    useEffect(() => {
        petchDiary()
    }, [])

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
                {<S.Imoge>{moodImoge(diaryData.filter((diary) => { return diary.date === eachDay.format("YYYY-MM-DD") })[0]?.mood)}</S.Imoge>}

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


    if (!CurrentYear) { return <></> }

    return (
        <>
            <S.Title>
                {CurrentYear + "년"}

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
