import { Main } from '@/styles/home_style'
import { BarsOutlined, DotChartOutlined, HomeOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Input } from 'antd'
import Title from 'antd/es/typography/Title'
import dayjs from 'dayjs'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'

type Props = {
    children: JSX.Element
}


const Layout = (props: Props) => {
    const LayoutStyle = styled.div`
        display: flex;        
        padding: 0px 20px;
        margin: 40px auto;
        gap: 20px;
        justify-content: center;
    `
    const Title = styled.h1`
        
    `
    const Logo = styled.div`
    font-size: 36px;
        
    `

    const Aside = styled.aside`
        display: flex;
        width: 120px;
        flex-direction:column;
        gap: 10px;
        p{
            font-size: 13px;
        }
    `

    const LinkLists = styled.ul`
        display: flex;
        flex-direction: column;
    `

    const Space = styled.div`
        height: 10px;
    `

    const LinkStyle = styled.li`
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 13px;
        list-style: none;
        padding: 10px 0px;
        border-bottom: 1px solid #dae1e6;
    `

    const today = dayjs()
    const [birthDay, setBirthDay] = useState(dayjs("1993-9-1"))


    const onchangeBirthDay = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthDay(dayjs(e.target.value))
    }


    return (
        <LayoutStyle>
            <Aside>
                <Logo>📅</Logo>
                <Title>100년 <br />다이어리</Title>
                <Space />
                <LinkLists>
                    <Link href={"/"}><LinkStyle><HomeOutlined /> 홈</LinkStyle></Link>
                    <Link href={"/"}><LinkStyle><BarsOutlined /> 피드</LinkStyle></Link>
                    <Link href={"/"}><LinkStyle><PlusCircleOutlined /> 작성</LinkStyle></Link>
                    <Link href={"/"}><LinkStyle><DotChartOutlined /> 통계</LinkStyle></Link>
                    <Link href={"/"}><LinkStyle><SettingOutlined /> 설정</LinkStyle></Link>
                </LinkLists>
            </Aside>
            <Main>{props.children}</Main>
            <Aside>
                <p>오늘 : {today.format("YYYY-MM-DD")}</p>

                <p>내 생일 : </p>
                <Input type='date' onChange={onchangeBirthDay} defaultValue={birthDay.format("YYYY-MM-DD")}></Input>

                <div>
                    <p>지금까지 : </p>
                    <p>{today.diff(birthDay, "day")}일</p>
                    <p>{today.diff(birthDay, "weeks")}주</p>
                    <p>{today.diff(birthDay, "month")}월</p>
                    <p>{today.diff(birthDay, "years")}년</p>
                    <p>을 살아왔습니다.</p>
                </div>
                <div>
                    <p>남은수명 :</p>
                    <p>{birthDay.add(100, "years").diff(today, "days")}일</p>
                    <p>{birthDay.add(100, "years").diff(today, "weeks")}주</p>
                    <p>{birthDay.add(100, "years").diff(today, "months")}월</p>
                    <p>{birthDay.add(100, "years").diff(today, "years")}년</p>
                    <p>을 더 살아갈 수 있습니다.</p>
                </div>
            </Aside>
        </LayoutStyle>
    )
}

export default Layout