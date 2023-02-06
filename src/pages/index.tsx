import * as S from '@/styles/home_style'
import dayjs, { Dayjs } from "dayjs"
import { ChangeEvent, useState } from 'react';
import { Button, Input } from 'antd';
import { useRouter } from 'next/router';

export default function Home() {

	const today = dayjs()
	const [focusedDay, setFocusedDay] = useState(dayjs())
	const [birthDay, setBirthDay] = useState(dayjs("1993-9-1"))

	const router = useRouter()

	const Calendar = (day: Dayjs) => {
		const allDays = []

		for (let index = 0; index < day.startOf("month").day(); index++) {
			const eachDayOfPrevMonth = day
				.startOf("month")
				.subtract(day.startOf("month").day() - index, 'days')
			allDays.push(<S.DayBlock
				key={eachDayOfPrevMonth.format()}
				style={{
					backgroundColor: "#f7f9fa",
					color: "grey"
				}}
				onClick={() => onClickDate(eachDayOfPrevMonth)}
			>{eachDayOfPrevMonth.date()}
			</S.DayBlock>)
		}

		for (let index = 0; index < Number(day.endOf("month").format("DD")); index++) {
			const eachDay = dayjs(`${day.year()}-${day.month() + 1}-${1 + index}`)
			const isToday = today.isSame(eachDay, "date")
			allDays.push(<S.DayBlock
				key={eachDay.format()}
				style={{
					backgroundColor: isToday ? "#ffffd9" : ""
				}}
				onClick={() => onClickDate(eachDay)}
			>{eachDay.date()}
			</S.DayBlock>)
		}

		if (42 - day.endOf("month").date() - day.startOf("month").day() > 6) {
			for (let index = 0; index < 35 - day.endOf("month").date() - day.startOf("month").day(); index++) {
				const eachDayOfNextMonth = day.endOf("month").add(index + 1, "days")
				allDays.push(<S.DayBlock
					key={eachDayOfNextMonth.format()}
					style={{
						backgroundColor: "#f7f9fa",
						color: "grey"
					}}
					onClick={() => onClickDate(day)}
				>{eachDayOfNextMonth.date()}
				</S.DayBlock>)
			}
		} else {
			for (let index = 0; index < 42 - day.endOf("month").date() - day.startOf("month").day(); index++) {
				const eachDayOfNextMonth = day.endOf("month").add(index + 1, "days")
				allDays.push(<S.DayBlock
					key={eachDayOfNextMonth.format()}
					style={{
						backgroundColor: "#f7f9fa",
						color: "grey"
					}}
					onClick={() => onClickDate(eachDayOfNextMonth)}
				>{eachDayOfNextMonth.date()}
				</S.DayBlock>)
			}
		}
		return allDays
	}


	const onchangeBirthDay = (e: ChangeEvent<HTMLInputElement>) => {
		setBirthDay(dayjs(e.target.value))
	}

	const lifeSpan = 100;
	const 기준일 = -3

	const onClickPrev = () => {
		setFocusedDay(focusedDay.subtract(1, "month"))
	}

	const onClickNext = () => {
		setFocusedDay(focusedDay.add(1, "month"))
	}

	const onClickDate = (day: Dayjs) => {
		router.push(`/${day.format("YYYY-MM-DD")}`)
	}

	return (
		<>
			<p>오늘 : {today.format("YYYY-MM-DD")}</p>

			<p>내 생일 :</p>
			<Input type='date' onChange={onchangeBirthDay} defaultValue={birthDay.format("YYYY-MM-DD")}></Input>

			<p>평균수명 : {lifeSpan}년</p>
			<p>지금까지 : {today.diff(birthDay, "day")}일 / {today.diff(birthDay, "weeks")}주 / {today.diff(birthDay, "month")}월 / {today.diff(birthDay, "years")}년 을 살아왔습니다.</p>
			<p>남은수명 : {birthDay.add(lifeSpan, "years").diff(today, "days")}일 / {birthDay.add(lifeSpan, "years").diff(today, "weeks")}주 / {birthDay.add(lifeSpan, "years").diff(today, "months")}월 / {birthDay.add(lifeSpan, "years").diff(today, "years")}년 을 더 살아갈 수 있습니다.</p>

			<S.RowWrapper>
				<S.ButtonsWrapper>
					<Button onClick={onClickPrev}>지난 달</Button>
					<Button onClick={() => setFocusedDay(today)}>오늘</Button>
					<Button onClick={onClickNext}>다음 달</Button>
				</S.ButtonsWrapper>

				<S.DayBlockContainer>
					<S.DayBlock>{focusedDay.get("year")}년</S.DayBlock>
					<S.DayBlock>{focusedDay.get("month") + 1}월</S.DayBlock>
				</S.DayBlockContainer>
				<S.DayBlockContainer>
					{Calendar(focusedDay)}
				</S.DayBlockContainer>
			</S.RowWrapper>

		</>
	)
}
