import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Decades = (props: Props) => {
    const DacadesBlock = styled.div`
        font-size: 11px;
        width: 310px;
        height: 60px;
        border-radius: 3px;
        border: 1px solid #dae1e6;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `

    const BlockContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5px;
    `

    const Block = styled.div`
        width: 20px;
        border-radius: 3px;
        height: 20px;
        border: 1px solid #dae1e6;
    `

    const Title = styled.h1`
        
        `
    const router = useRouter()
    const onClickDacades = (e: React.MouseEvent<HTMLDivElement>) => {
        router.push(`/${e.currentTarget.id}/years`)
    }

    const allYears = []
    for (let index = 0; index < 100; index++) {
        allYears.push(
            <Block key={index} />)

    }

    return (
        <>
            <Title>당신의 시대</Title>
            <BlockContainer>
                {allYears}
            </BlockContainer>
        </>
    )
}

export default Decades