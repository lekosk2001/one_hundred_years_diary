import { BarsOutlined, DotChartOutlined, GithubOutlined, HomeOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'
import * as S from './LeftAside_style'

const LeftAside = () => {
    return (
        <>  
            <S.LogoBox>
                <Link href={"/"}>
                    <S.Logo>📅</S.Logo>
                    <S.Title>100년 다이어리</S.Title>
                </Link>
            </S.LogoBox>
            <S.LinkLists>
                <Link href={"/"}><S.LinkStyle><HomeOutlined /> 홈</S.LinkStyle></Link>
                <Link href={"/feed"}><S.LinkStyle><BarsOutlined /> 피드</S.LinkStyle></Link>
                <Link href={`/create`}><S.LinkStyle><PlusCircleOutlined /> 작성</S.LinkStyle></Link>
                <Link href={"/statistics"}><S.LinkStyle><DotChartOutlined /> 통계</S.LinkStyle></Link>
                <Link href={"/setting"}><S.LinkStyle><SettingOutlined /> 설정</S.LinkStyle></Link>
            </S.LinkLists>
            <S.Github href={"https://github.com/lekosk2001/one_hundred_years_diary"} target='_blank'><GithubOutlined /> github Docs</S.Github>

        </>
    )
}

export default LeftAside