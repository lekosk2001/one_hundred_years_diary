import Form from '@/components/units/form/form'
import React from 'react'

type Props = {
    id: string
}

const index = (props: Props) => {
    return (
        <Form isEdit={true} id={props.id} />
    )
}

export default index