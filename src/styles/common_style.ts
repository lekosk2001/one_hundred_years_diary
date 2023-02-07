import styled from "@emotion/styled"

export const Main = styled.main`
    background-color: #fff;
    padding: 30px 30px;
    display: flex;
    align-items: center;
    width: 768px;
    min-width: 360px;
    flex-direction: column;
    border: 1px solid #dae1e6;
    overflow: hidden;
`


export const TodayInfo = styled.p`
font-size: 13px;
color: gray;
font-weight: 400;
letter-spacing: 0px;
padding: 3px 0px;
`

export const Title = styled.h1`
    letter-spacing: -1px;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #dae1e6;
    text-align: center;
`

export const CalendarContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 30px 0px;
    justify-content: center;
    transition: 0.1s all ease;

`


export const MonthContainer = styled.div`
    display: flex;
    gap: 20px;
    min-height: 130px;
    flex-wrap: wrap;

`

export const ButtonsWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    
    border-bottom: 1px solid #dae1e6;
    padding-top: 15px;
    padding-bottom: 15px;
`

export const DayBlockContainer = styled.div`
    min-width: 310px;
    max-width: 625px;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
`

export const MonthTitle = styled.h4`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #dae1e6;
    
`
export const CurrentYearMini = styled.p`
    font-weight: 400;
    font-size: 9px;
    line-height: 9px;
`

export const DayBlock = styled.div`
    font-size: 11px;
    line-height: 11px;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #dae1e6;
    display: flex;
    padding: 5px;
    cursor: pointer;
    transition: 0.1s all ease;
    &:hover{
        background-color: #dae1e6;
        text-decoration: underline;
    }
`


export const DayBlockBlank = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 3px;
`
