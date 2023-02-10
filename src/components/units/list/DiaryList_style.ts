import styled from "@emotion/styled"

export const DiaryCardList = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px 0px;
`

export const CardImage = styled.img`
    width: "100%";
`


export const CardHeader = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 5px;
    justify-content: space-between;
    border-bottom: 1px solid #dae1e6;
    align-items:center;
    margin-bottom: 20px;
`

export const CardMood =styled.h4`
font-size: 15px;
`

export const CardTime = styled.p`
color: gray;
font-size: 13px;
`

export const CardContents = styled.p`
margin-top: 10px;
min-height: 40px;
overflow: hidden;
`
