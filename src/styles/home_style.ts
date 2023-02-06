import styled from "@emotion/styled"

export const Main = styled.main`
    background-color: #fff;
    padding: 20px 20px;
    display: flex;
    justify-content: center;
    max-width: 768px;
    flex-direction: column;
    border: 1px solid #dae1e6;
    gap: 10px;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

export const DayBlockContainer = styled.div`
    width: 310px;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
`

export const DayBlock = styled.div`
    font-size: 11px;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #dae1e6;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`