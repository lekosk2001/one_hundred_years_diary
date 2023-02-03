import styled from "@emotion/styled"
import dayjs from "dayjs"

export default function Home() {
	const Main = styled.main`
		background-color: #fff;
		padding: 20px 20px;
		margin: 40px auto;
		display: flex;
		justify-content: center;
		max-width: 768px;
		flex-direction: column;
		border: 1px solid #dae1e6;
	`
	const RowWrapper = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
	`

	const WeekRow = styled.div`
		display: flex;
		gap: 10px;
		padding: 20px 0px;
		border-top: 1px solid #dae1e6;
	`

	const DayBlockContainer = styled.div`
		display: flex;
		gap: 10px;
		p{
			font-size: 11px;
		}
	`

	const WeekNumber = styled.p`
	width: 40px;
	display: flex;
	align-items: center;
	font-size: 13px;
	justify-content: center;
		
`

	const DayBlock = styled.div`
		font-size: 10px;
		width: 50px;
		height: 50px;
		border-radius: 3px;
		/* background-color: #19CE60; */
		background-color: #f7f9fa;
		border: 1px solid #dae1e6;
		display: flex;
		align-items: center;
		justify-content: center;

	`
	const today = new Date();
	const birthDay = new Date(1993, 9, 1);

	const elapsedMSec = today.getTime() - birthDay.getTime();
	const elapsedDay = Math.ceil(elapsedMSec / 1000 / 60 / 60 / 24)
	const elapsedWeek = Math.ceil(elapsedMSec / 1000 / 60 / 60 / 24 / 7)
	const elapsedMonth = Math.ceil(elapsedMSec / 1000 / 60 / 60 / 24 / 31)
	const elapsedYear = Math.ceil(elapsedMSec / 1000 / 60 / 60 / 24 / 365)

	const aa = dayjs(birthDay).add(1, "d").format()
	console.log(aa)
	const lifeSpan = 100;
	const 기준일 = -3

	const allWeeks = new Array(lifeSpan * Math.ceil(365 / 7))
		.fill(1)
		.map((week, weekIndex) => { return week + weekIndex })
		.reverse()
		.map((week, weekIndex) => {

			if (week > 5214) { return }
			return (
				<WeekRow key={week}>
					<WeekNumber>{week}</WeekNumber>
					<DayBlockContainer>
						{
							new Array(7).fill(1).map((day, dayIndex) => {
								const number = (value: number) => { return value + day + dayIndex + ((week - 1) * 7) }

								if (number(기준일) > 0) {
									return (<DayBlock key={dayIndex * week} id={String(number(기준일))}>{
										dayjs(birthDay).add(number(기준일) - 31, "d").format("YY. MM. DD.")
									}</DayBlock>)
								}

								else { return <DayBlock key={dayIndex * week} id={String(number(기준일))}></DayBlock> }

							})
						}
					</DayBlockContainer>
				</WeekRow>
			)
		})


	return (
		<Main>
			<p>{`${today.getFullYear()}. ${today.getMonth()}. ${today.getDate()}`}</p>
			<p>{`${birthDay.getFullYear()}. ${birthDay.getMonth()}. ${birthDay.getDate()}`}</p>
			<p>{elapsedDay} 일</p>
			<p>{elapsedWeek} 주</p>
			<p>{elapsedMonth} 월</p>
			<p>{elapsedYear} 년</p>
			<RowWrapper>
				{allWeeks}
			</RowWrapper>
		</Main>
	)
}
