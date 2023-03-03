import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { Spin } from 'antd';

const index = () => {
    const router = useRouter();
    const today = dayjs()

    useEffect(() => {
        router.push(`/${today.format("YYYY/MM-DD")}/create`)
    }, [])

    return (
        <Spin/>
    )
}

export default index