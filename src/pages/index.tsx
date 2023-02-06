import * as S from '@/styles/home_style'
import dayjs, { Dayjs } from "dayjs"
import { ChangeEvent, useState } from 'react';
import { Button, Input } from 'antd';
import { useRouter } from 'next/router';
import Decades from './[decades]';
import Years from './[decades]/[years]';

export default function Home() {

	const today = dayjs()
	const [focusedDay, setFocusedDay] = useState(dayjs())

	const router = useRouter()

	const Calendar = (day: Dayjs) => {
		const allDays = []

		// for (let index = 0; index < day.startOf("month").day(); index++) {
		// 	const eachDayOfPrevMonth = day
		// 		.startOf("month")
		// 		.subtract(day.startOf("month").day() - index, 'days')
		// 	allDays.push(<S.DayBlock
		// 		key={eachDayOfPrevMonth.format()}
		// 		style={{
		// 			border: "0px",
		// 			cursor: "auto"
		// 		}}
		// 	/>)
		// }

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

		if (allDays.length <= 28) { allDays.push(<S.DayBlock style={{ border: " 0px", cursor: "auto" }} />) }

		return allDays
	}


	const onClickPrev = () => {
		setFocusedDay(focusedDay.subtract(1, "year"))
	}

	const onClickNext = () => {
		setFocusedDay(focusedDay.add(1, "year"))
	}

	const onClickDate = (day: Dayjs) => {
		router.push(`/decades/years/${day.format("YYYY-MM-DD")}`)
	}

	const fullCalendar = []
	for (let index = 0; index < 12; index++) {
		fullCalendar.push(<S.MonthContainer key={index}>
			<S.MonthTitle>
				{index + 1}
			</S.MonthTitle>
			<S.DayBlockContainer>
				{Calendar(focusedDay.startOf("year").month(index))}
			</S.DayBlockContainer>
		</S.MonthContainer>)
	}

	return (
		<>
			<Decades></Decades>
			<S.Title>{focusedDay.get("year")}년</S.Title>
			<S.ButtonsWrapper>
				<Button onClick={onClickPrev}>지난 해</Button>
				<Button onClick={() => setFocusedDay(today)}>오늘</Button>
				<Button onClick={onClickNext}>다음 해</Button>
			</S.ButtonsWrapper>

			<S.CalendarContainer>
				{fullCalendar}
			</S.CalendarContainer>
		</>
	)
}
