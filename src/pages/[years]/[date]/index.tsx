import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import * as S from '@/styles/common_style'
type Props = {}

const Date = (props: Props) => {

    const router = useRouter()
    return (
        <>

            <S.Title>{`${router.query.years}-${router.query.date}`}</S.Title>
            <S.ButtonsWrapper>
                <Button onClick={() => {
                    router.push(`/${router.query.years}/${router.query.date}/create`)
                }}>작성</Button>
            </S.ButtonsWrapper>
        </>
    )
}

export default Date