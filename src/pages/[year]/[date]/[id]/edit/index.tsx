import Form from '@/components/units/form/form'
import { useRouter } from 'next/router'
import React from 'react'
import { Spin } from 'antd';

type Props = {
}

const index = (props: Props) => {
    const route = useRouter()
    const id = route.query.id

    if (!id) { return <Spin/> }

    return (
        <Form id={id} />
    )
}

export default index