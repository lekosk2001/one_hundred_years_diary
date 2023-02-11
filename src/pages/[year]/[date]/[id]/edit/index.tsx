import Form from '@/components/units/form/form'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
}

const index = (props: Props) => {
    const route = useRouter()
    const id = route.query.id

    if (!id) { return <></> }

    return (
        <Form id={id} />
    )
}

export default index