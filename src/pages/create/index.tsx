import React, { useEffect } from 'react'
import Form from '@/components/units/create/form'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

const index = () => {
    const router = useRouter();
    const today = dayjs()

    useEffect(() => {
        router.push(`/${today.year()}/${today.format("MM-DD")}/create`)
    }, [])

    return (
        <></>
    )
}

export default index