import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const TotalYears = (props: Props) => {

    const TotalYearsSection = styled.section`
        max-width: 495px;
    width: 100%;
    border-bottom: 1px solid #dae1e6;

    padding: 20px 0px;


    `

    const YearBlockContainer = styled.div`
    flex-wrap: wrap;
        display: flex;
        gap: 5px;
    `

    const YearBlock = styled.div`
        width: 20px;
        height: 20px;
        font-size: 9px;
        line-height: 20px;
        border: 1px solid #dae1e6;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;

    `

    const yearBlocks = new Array(100).fill(1).map((el, i) => {
        return (
            <YearBlock key={i}>{i}</YearBlock>
        )
    })


    return (
        <TotalYearsSection>
            <YearBlockContainer>
                {yearBlocks}
            </YearBlockContainer>
        </TotalYearsSection>
    )
}

export default TotalYears