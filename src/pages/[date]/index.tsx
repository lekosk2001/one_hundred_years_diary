import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

const index = (props: Props) => {

    const router = useRouter()
    return (
        <>{router.query.date}</>
    )
}

export default index