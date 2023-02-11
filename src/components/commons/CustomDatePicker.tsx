import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
    isCreate: boolean
}

const CustomDatePicker = (props: Props) => {
    const router = useRouter()
    if (!router.query.year || !router.query.date) { return <></> }

    const onChangeDate = (date: any) => {
        if (date) {
            router.push(`/${dayjs(date).format("YYYY/MM-DD")}${props.isCreate ? "/create" : ""}`)
        }
    }

    const thisDay = dayjs(router.query.year + "-" + router.query.date)

    return (
        <DatePicker
            style={{ "width": "100%" }}
            placeholder="날짜 선택"
            defaultValue={thisDay}
            onChange={onChangeDate}
        />
    )
}

export default CustomDatePicker