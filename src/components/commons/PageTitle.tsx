import styled from '@emotion/styled'
import React from 'react'

type Props = {
    title: string
    sub: string
}


const Title = styled.h1`
    letter-spacing: -1px;
    width: 100%;
    padding-bottom: 20px;
    text-align: center;
`

const TodayInfo = styled.p`
font-size: 13px;
color: gray;
font-weight: 400;
letter-spacing: 0px;
padding: 3px 0px;
`

const PageTitle = (props: Props) => {
    return (
        <Title>
            {props.title}
            <TodayInfo>
                {props.sub}
            </TodayInfo>
        </Title>
    )
}

export default PageTitle