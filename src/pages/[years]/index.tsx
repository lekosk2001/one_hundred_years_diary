import * as S from '@/styles/home_style'
import { Button } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { useRouter } from 'next/router'
import { useState } from 'react'

type Props = {}

const Years = (props: Props) => {


    const router = useRouter()
    const CurrentYear = Number(router.query.years)
    if (!CurrentYear) { return <></> }

    const onClickDate = (day: Dayjs) => {
        router.push(`/${day.format("YYYY")}/${day.format("MM-DD")}`)
    }

    const today = dayjs()

    const Calendar = (day: Dayjs) => {
        const allDays = []

        for (let index = 0; index < day.startOf("month").day(); index++) {
            allDays.push(<S.DayBlockBlank key={day.format() + index} ></S.DayBlockBlank>)
        }

        for (let index = 0; index < Number(day.endOf("month").format("DD")); index++) {
            const eachDay = dayjs(`${day.year()}-${day.month() + 1}-${1 + index}`)
            const isToday = today.isSame(eachDay, "date")

            allDays.push(<S.DayBlock
                key={eachDay.format()}
                style={{
                    backgroundColor: isToday ? "#ffffd9" : "",
                    color: eachDay.day() === 0 ? "red" : "",
                }}
                onClick={() => onClickDate(eachDay)}
            >{eachDay.date()}
            </S.DayBlock>)
        }

        if (allDays.length <= 28) {
            allDays.push(<S.DayBlockBlank key={day.format() + "1"} />)
        }

        return allDays
    }


    const fullCalendar = []
    for (let index = 0; index < 12; index++) {
        fullCalendar.push(<S.MonthContainer key={index}>


            <S.MonthTitle>
                <S.CurrentYearMini>{CurrentYear}</S.CurrentYearMini>
                {index + 1}
            </S.MonthTitle>
            <S.DayBlockContainer>
                {Calendar(dayjs().year(CurrentYear).startOf("year").month(index))}
            </S.DayBlockContainer>
        </S.MonthContainer>)
    }
    return (
        <>
            <S.Title>{CurrentYear}년</S.Title>
            <S.ButtonsWrapper>
                <Button onClick={() => { router.push(`/${CurrentYear - 1}`) }}>지난 해</Button>
                <Button onClick={() => { router.push(`${dayjs().year()}`) }}>올해</Button>
                <Button onClick={() => { router.push(`/${CurrentYear + 1}`) }}>다음 해</Button>
            </S.ButtonsWrapper>

            <S.CalendarContainer>
                {fullCalendar}
            </S.CalendarContainer>
        </>
    )
}

export default Years
