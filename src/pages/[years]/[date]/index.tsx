import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

const Date = (props: Props) => {

    const router = useRouter()
    return (
        <div>{`${router.query.years}-${router.query.date}`}</div>
    )
}

export default Date