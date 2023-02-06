import { Main } from '@/styles/home_style'
import { BarsOutlined, DotChartOutlined, HomeOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { JsxChild } from 'typescript'

type Props = {
    children: JSX.Element
}


const Layout = (props: Props) => {
    const LayoutStyle = styled.div`
        padding: 0px 20px;
        display: flex;
        margin: 40px auto;
        justify-content: center;
        gap: 20px;
    `

    const Aside = styled.aside`
        width: 120px;
    `

    const LinkLists = styled.ul`
        display: flex;
        flex-direction: column;
    `

    const LinkStyle = styled.li`

        font-size: 13px;
        list-style: none;
        padding: 10px 0px;
        border-bottom: 1px solid #dae1e6;
    `

    return (
        <LayoutStyle>
            <Aside>
                <LinkLists>
                    <Link href={"/"}><LinkStyle><HomeOutlined /> 홈</LinkStyle></Link>
                    <Link href={"/"}><LinkStyle><BarsOutlined /> 피드</LinkStyle></Link>
                    <Link href={"/"}><LinkStyle><PlusCircleOutlined /> 작성</LinkStyle></Link>
                    <Link href={"/"}><LinkStyle><DotChartOutlined /> 통계</LinkStyle></Link>
                    <Link href={"/"}><LinkStyle><SettingOutlined /> 설정</LinkStyle></Link>
                </LinkLists>
            </Aside>
            <Main>{props.children}</Main>
            <Aside></Aside>
        </LayoutStyle>
    )
}

export default Layout