import React from 'react'
import { useRouter } from 'next/router'
import { Button, DatePicker } from 'antd'
import * as S from '@/styles/common_style'
import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import CustomDatePicker from '@/components/commons/CustomDatePicker'
type Props = {}

const Date = (props: Props) => {

    const router = useRouter()
    const thisDay = dayjs(router.query.year + "-" + router.query.date)

    if (!router.query) { return <></> }

    return (
        <>

            <S.Title>
                {thisDay.format("YYYY년 MM월 DD일")}
                <S.TodayInfo>
                    {thisDay.format("dddd")}
                </S.TodayInfo>
            </S.Title>

            <S.ButtonsWrapper>
                <Button onClick={() => router.push(`/${router.query.year}`)}><LeftOutlined /> 뒤로</Button>
                <CustomDatePicker isCreate={false} />
                <Button onClick={() =>
                    router.push(`/${router.query.year}/${router.query.date}/create`)
                }><EditOutlined /> 작성</Button>
            </S.ButtonsWrapper>
        </>
    )
}

export default Date