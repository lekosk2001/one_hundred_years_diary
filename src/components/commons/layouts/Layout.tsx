import * as S from './Layout_style'
import dayjs from 'dayjs'
import RightAside from '@/components/commons/layouts/RightAside'
import LeftAside from './LeftAside'
import { useRecoilState } from 'recoil'
import { birthdayState, sizeToggleState } from '@/store/atoms'

type Props = {
    children: JSX.Element
}

const Layout = (props: Props) => {
    const today = dayjs()
    const [birthDay] = useRecoilState(birthdayState)
    const [sizeToggle, setSizeToggle] = useRecoilState(sizeToggleState)
    
    return (<>
    <S.LayoutStyle>
            <S.Aside>
                <LeftAside/>
            </S.Aside>

            <S.Main
                style={{
                    maxWidth: sizeToggle ? "360px" : "768px"
                }}
            >{props.children}</S.Main>

            <S.Aside>
                <RightAside
                    birthDay={birthDay}
                    today={today}
                />
            </S.Aside>
        </S.LayoutStyle>
        <S.Footer>
            © 2023 ONE HUNDRED YEARS DIARY - 100년 다이어리
        </S.Footer>
    </>
    )
}

export default Layout