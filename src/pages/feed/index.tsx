import DiaryList from '@/components/units/list/DiaryList'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const index = (props: Props) => {
    return (
        <DiaryList thisDay={null} />
    )
}

export default index