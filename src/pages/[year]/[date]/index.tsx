import DiaryList from '@/components/units/list/DiaryList'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const index = (props: Props) => {

    const router = useRouter()
    const thisDay = dayjs(router.query.year + "-" + router.query.date)

    return (
        <DiaryList thisDay={thisDay} />
    )
}

export default index