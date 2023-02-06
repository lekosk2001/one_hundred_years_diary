import styled from "@emotion/styled"

export const Main = styled.main`
    background-color: #fff;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    width: 768px;
    min-width: 360px;
    flex-direction: column;
    border: 1px solid #dae1e6;
    gap: 10px;
`


export const CalendarContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 20px 0px;
    justify-content: center;

`


export const MonthContainer = styled.div`
    display: flex;
    gap: 10px;
    min-height: 130px;

`

export const ButtonsWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #dae1e6;
`

export const DayBlockContainer = styled.div`
    min-width: 310px;
    max-width: 625px;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
`

export const Title = styled.h1`
`

export const MonthTitle = styled.h4`
    display: flex;
    justify-content: center;
    min-width: 40px;
    
`

export const DayBlock = styled.div`
    font-size: 13px;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #dae1e6;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`