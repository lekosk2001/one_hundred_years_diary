import styled from "@emotion/styled"

export const Main = styled.main`
    background-color: #fff;
    padding: 20px 20px;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    max-width: 768px;
    flex-direction: column;
    border: 1px solid #dae1e6;
    gap: 10px;
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const DayBlockContainer = styled.div`
    width: 410px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

export const DayBlock = styled.div`
    font-size: 10px;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    background-color: #f7f9fa;
    border: 1px solid #dae1e6;
    display: flex;
    align-items: center;
    justify-content: center;
`