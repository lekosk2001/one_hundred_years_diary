import styled from "@emotion/styled"

export default function Home() {
	const Main = styled.main`
		padding: 20px 20px;
		margin: 0px auto;
		display: flex;
		justify-content: center;
		max-width: 768px;
		flex-direction: column;
	`
	const DayBlockContainer = styled.div`
		display: flex;
		gap: 10px;
		flex-wrap: nowrap;
		flex-direction: column;
	`
	const WeekRow = styled.div`
		display: flex;
		gap: 10px;
		flex-wrap: nowrap;
		align-items: center;
		p{
			font-size: 11px;
		}
		
	`
	
	const WeekNumber = styled.div`
		width: 40px;
		display: flex;
		justify-content: center;
`

	const DayBlock = styled.div`
	font-size: 11px;
		width: 40px;
		height: 40px;
		border-radius: 5px;
		/* background-color: #19CE60; */
		background-color: #f7f9fa;
		border: 1px solid #dae1e6;
		display: flex;
		align-items: center;
		justify-content: center;

	`
	const today = new Date();
	const birthDay = new Date(1993,9,1);
	const lifeSpan = 100;
	const elapsedMSec = today.getTime() - birthDay.getTime(); 
	const elapsedDay = Math.ceil(elapsedMSec / 1000 / 60 / 60 / 24)
	const elapsedWeek = Math.ceil(elapsedMSec / 1000 / 60 / 60 / 24 / 7)
	const elapsedMonth = Math.ceil(elapsedMSec / 1000 / 60 / 60 / 24 / 31)
	const elapsedYear = Math.ceil(elapsedMSec / 1000 / 60 / 60 / 24 / 365)
	
	const allWeeks = new Array(Math.ceil(lifeSpan*365/7)-1).fill(1).map((week,weekIndex)=>{
		return week+weekIndex
	}).reverse().map((week,weekIndex)=>{
		return(
			<WeekRow key={week}>
				<>
				<WeekNumber><p>{week}</p></WeekNumber>
				{
					new Array(7).fill(1).map((day,dayIndex)=>{ 
						return ( <DayBlock key={dayIndex*week}>{day+dayIndex+((week-1)*7)}</DayBlock> )
					})
				}
				</>
				
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
			<DayBlockContainer>
				{allWeeks}
			</DayBlockContainer>
		</Main>
	)
}
