import * as S from './style'
import { Main } from '@/styles/common_style'
import { BarsOutlined, DotChartOutlined, HomeOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'
import TotalYears from '@/components/units/TotalYears/TotalYears'

type Props = {
    children: JSX.Element
}

const Layout = (props: Props) => {
    const today = dayjs()
    const [birthDay, setBirthDay] = useState(dayjs("1993-9-1"))

    const onchangeBirthDay = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthDay(dayjs(e.target.value))
    }

    const [sizeToggle, setSizeToggle] = useState(false)

    return (
        <S.LayoutStyle>
            <S.Aside>
                <Link href={"/"}>
                    <S.Logo>📅</S.Logo>
                    <S.Title>100년 <br />다이어리</S.Title>
                </Link>
                <S.Space />
                <S.LinkLists>
                    <Link href={"/"}><S.LinkStyle><HomeOutlined /> 홈</S.LinkStyle></Link>
                    <Link href={"/feed"}><S.LinkStyle><BarsOutlined /> 피드</S.LinkStyle></Link>
                    <Link href={`/${today.year()}/${today.format("MM-DD")}/create`}><S.LinkStyle><PlusCircleOutlined /> 작성</S.LinkStyle></Link>
                    <Link href={"/statistics"}><S.LinkStyle><DotChartOutlined /> 통계</S.LinkStyle></Link>
                    <Link href={"/setting"}><S.LinkStyle><SettingOutlined /> 설정</S.LinkStyle></Link>
                </S.LinkLists>
                <S.Space />
                <Button onClick={() => { setSizeToggle((prev) => !prev) }}>{sizeToggle ? "확대" : "축소"}</Button>
            </S.Aside>

            <Main
                style={{
                    width: sizeToggle ? "360px" : "768px"
                }}
            >{props.children}</Main>

            <S.Aside>
                <div>
                    <p>내 생일 : </p>
                    <Input type='date' onChange={onchangeBirthDay} defaultValue={birthDay.format("YYYY-MM-DD")}></Input>
                </div>
                <div>
                    <p>지금까지 : </p>
                    <p>{today.diff(birthDay, "weeks")}주를 살아왔습니다.</p>
                    <p>{birthDay.add(100, "years").diff(today, "weeks")}주를 더 살아갈 수 있습니다.</p>
                </div>
                <TotalYears />
            </S.Aside>
        </S.LayoutStyle>
    )
}

export default Layout