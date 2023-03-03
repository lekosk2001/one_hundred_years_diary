import * as S from './Layout_style'
import dayjs from 'dayjs'
import { useRecoilState } from 'recoil'
import { sizeToggleState } from '@/store/atoms'
import Footer from './Footer'
import RightAside from './asides/RightAside'
import LeftAside from './asides/LeftAside'

type Props = {
    children: JSX.Element
}

const Layout = (props: Props) => {
    const [sizeToggle, setSizeToggle] = useRecoilState(sizeToggleState)
    
    return (
        <>
            <S.LayoutStyle>
                <S.Aside style={{
                        maxWidth: sizeToggle ? "360px" : "768px"
                    }}>
                    <LeftAside/>
                </S.Aside>

                <S.Main
                    style={{
                        maxWidth: sizeToggle ? "360px" : "768px"
                    }}
                >{props.children}</S.Main>

                <S.Aside style={{
                        maxWidth: sizeToggle ? "360px" : "768px"
                    }}>
                    <RightAside/>
                </S.Aside>
            </S.LayoutStyle>
            <Footer/>
        </>
    )
}

export default Layout
