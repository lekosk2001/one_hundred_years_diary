import * as S from '../styles/Home_style'
import dayjs, { Dayjs } from "dayjs"
import { ChangeEvent, useState } from 'react';
import { Input } from 'antd';

export default function Home() {

	const today = dayjs()
	const [birthDay, setBirthDay] = useState(dayjs("1993-9-1"))

	const lifeSpan = 100;
	const 기준일 = -3

	// const allWeeks = new Array(lifeSpan * Math.ceil(365 / 7))
	// 	.fill(1)
	// 	.map((week, weekIndex) => { return week + weekIndex })
	// 	.reverse()
	// 	.map((week, weekIndex) => {

	// 		if (week > 5214) { return }
	// 		return (
	// 			<WeekRow key={week}>
	// 				<WeekNumber>{week}</WeekNumber>
	// 				<DayBlockContainer>
	// 					{
	// 						new Array(7).fill(1).map((day, dayIndex) => {
	// 							const number = (value: number) => { return value + day + dayIndex + ((week - 1) * 7) }

	// 							if (number(기준일) > 0) {
	// 								return (<DayBlock key={dayIndex * week} id={String(number(기준일))}>{
	// 									dayjs(birthDay).add(number(기준일) - 31, "d").format("YY. MM. DD.")
	// 								}</DayBlock>)
	// 							}

	// 							else { return <DayBlock key={dayIndex * week} id={String(number(기준일))}></DayBlock> }

	// 						})
	// 					}
	// 				</DayBlockContainer>
	// 			</WeekRow>
	// 		)
	// 	})

	const onchangeBirthDay = (e: ChangeEvent<HTMLInputElement>) => {
		setBirthDay(dayjs(e.target.value))
	}
	const Calendar = (day: Dayjs) => {
		const allDays = []

		for (let index = 0; index < day.startOf("month").day(); index++) {
			allDays.push(<S.DayBlock></S.DayBlock>)
		}

		new Array(Number(day.endOf("month").format("DD")))
			.fill(1)
			.map((dayNumber, index) => {
				const eachDay = dayjs(`${day.year()}-${day.month() + 1}-${dayNumber + index}`)
				allDays.push(<S.DayBlock key={dayNumber + index}>{eachDay.date()}</S.DayBlock>)
			})

		for (let index = 0; index < 42 - day.endOf("month").day(); index++) {
			allDays.push(<S.DayBlock></S.DayBlock>)
		}



		return allDays


	}

	return (
		<S.Main>
			<p>오늘 : {today.format("YYYY-MM-DD")}</p>
			<p>내 생일 : {birthDay.format("YYYY-MM-DD")}</p>
			<p>평균 수명 : {lifeSpan}년</p>
			<p>남은 수명 : {birthDay.add(lifeSpan, "years").diff(today, "days")}일 / {birthDay.add(lifeSpan, "years").diff(today, "weeks")}주 / {birthDay.add(lifeSpan, "years").diff(today, "months")}월 / {birthDay.add(lifeSpan, "years").diff(today, "years")}년</p>

			<S.DayBlockContainer>
				<S.DayBlock>{today.get("month") + 1}</S.DayBlock>
				<S.DayBlock>{today.endOf('month').format("DD")}</S.DayBlock>
				<S.DayBlock>{today.format("dddd")}</S.DayBlock>
			</S.DayBlockContainer>

			<Input type='date' onChange={onchangeBirthDay} defaultValue={birthDay.format("YYYY-MM-DD")}></Input>



			<S.RowWrapper>
				<S.DayBlock>{birthDay.get("month") + 1}월</S.DayBlock>

				<S.DayBlockContainer>
					{Calendar(birthDay)}
				</S.DayBlockContainer>

			</S.RowWrapper>

		</S.Main>
	)
}
