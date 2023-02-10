import styled from '@emotion/styled'
import React from 'react'

type Props = {
    title: string
    sub: string
}

const TitleContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
`

const Title = styled.h1`
    letter-spacing: -1px;
    text-align: center;
`

const TodayInfo = styled.p`
font-size: 13px;
color: gray;
font-weight: 400;
letter-spacing: 0px;
padding: 3px 0px;

text-align: center;
`

const PageTitle = (props: Props) => {
    return (
        <TitleContainer>
            <Title>{props.title}</Title>
            <TodayInfo>{props.sub}</TodayInfo>
        </TitleContainer>
    )
}

export default PageTitle