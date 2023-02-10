import * as S from './Layout_style'
import dayjs from 'dayjs'
import React, { ChangeEvent, useState } from 'react'
import RightAside from '@/components/commons/layouts/RightAside'
import LeftAside from './LeftAside'

type Props = {
    children: JSX.Element
}

const Layout = (props: Props) => {
    const today = dayjs()
    const [birthDay, setBirthDay] = useState(dayjs("1993-9-1"))

    const onchangeBirthDay = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthDay(dayjs(e.target.value))
    }

    const [sizeToggle, setSizeToggle] = useState(false)

    return (
        <S.LayoutStyle>
            <S.Aside>
                <LeftAside
                    sizeToggle={sizeToggle}
                    setSizeToggle={setSizeToggle}
                ></LeftAside>
            </S.Aside>

            <S.Main
                style={{
                    width: sizeToggle ? "360px" : "768px"
                }}
            >{props.children}</S.Main>

            <S.Aside>
                <RightAside
                    onchangeBirthDay={onchangeBirthDay}
                    birthDay={birthDay}
                    today={today}
                />
            </S.Aside>
        </S.LayoutStyle>
    )
}

export default Layout