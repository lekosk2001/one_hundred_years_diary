import { BarsOutlined, DotChartOutlined, HomeOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Dayjs } from 'dayjs'
import Link from 'next/link'
import React from 'react'
import * as S from './LeftAside_style'

type Props = {
    sizeToggle: boolean;
    setSizeToggle: (prev: any) => void;
}

const LeftAside = (props: Props) => {
    return (
        <>
            <Link href={"/"}>
                <S.Logo>📅</S.Logo>
                <S.Title>100년 <br />다이어리</S.Title>
            </Link>
            <S.LinkLists>
                <Link href={"/"}><S.LinkStyle><HomeOutlined /> 홈</S.LinkStyle></Link>
                <Link href={"/feed"}><S.LinkStyle><BarsOutlined /> 피드</S.LinkStyle></Link>
                <Link href={`/create`}><S.LinkStyle><PlusCircleOutlined /> 작성</S.LinkStyle></Link>
                <Link href={"/statistics"}><S.LinkStyle><DotChartOutlined /> 통계</S.LinkStyle></Link>
                <Link href={"/setting"}><S.LinkStyle><SettingOutlined /> 설정</S.LinkStyle></Link>
            </S.LinkLists>
            <Button onClick={() => { props.setSizeToggle((prev: any) => !prev) }}>{props.sizeToggle ? "확대" : "축소"}</Button>
        </>
    )
}

export default LeftAside