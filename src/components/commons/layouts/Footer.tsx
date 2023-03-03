import { GithubOutlined } from '@ant-design/icons'
import * as S from './Footer_style'
import React from 'react'

const Footer = () => {
    return (
        <S.Footer>
            <p>© 2023 ONE HUNDRED YEARS DIARY - 100년 다이어리</p>
            <p>lekosk2001@naver.com</p>
            <a href={"https://github.com/lekosk2001/one_hundred_years_diary"} target='_blank'><GithubOutlined /> github Docs</a>
        </S.Footer>
    )
}

export default Footer

