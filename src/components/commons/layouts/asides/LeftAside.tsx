import { BarsOutlined, DotChartOutlined, GithubOutlined, HomeOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'
import * as S from './LeftAside_style'

const LeftAside = () => {
    return (
        <>  
            <S.LogoBox>
                <Link href={"/"}>
                    <S.Logo>π</S.Logo>
                    <S.Title>100λ λ€μ΄μ΄λ¦¬</S.Title>
                </Link>
            </S.LogoBox>
            <S.LinkLists>
                <Link href={"/"}><S.LinkStyle><HomeOutlined /> ν</S.LinkStyle></Link>
                <Link href={"/feed"}><S.LinkStyle><BarsOutlined /> νΌλ</S.LinkStyle></Link>
                <Link href={`/create`}><S.LinkStyle><PlusCircleOutlined /> μμ±</S.LinkStyle></Link>
                <Link href={"/statistics"}><S.LinkStyle><DotChartOutlined /> ν΅κ³</S.LinkStyle></Link>
                <Link href={"/setting"}><S.LinkStyle><SettingOutlined /> μ€μ </S.LinkStyle></Link>
            </S.LinkLists>
            <S.Github href={"https://github.com/lekosk2001/one_hundred_years_diary"} target='_blank'><GithubOutlined /> github Docs</S.Github>

        </>
    )
}

export default LeftAside