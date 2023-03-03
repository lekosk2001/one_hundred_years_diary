import { CaretRightOutlined } from '@ant-design/icons'
// import { Popover } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { useRouter } from 'next/router'
import React from 'react'
import * as S from './RightAsied_style'
import { Progress } from 'antd';
import { blue } from '@ant-design/colors';
import { useRecoilState } from 'recoil'
import { birthdayState } from '@/store/atoms'


const RightAside = () => {
    const today = dayjs();
    const [birthDay] = useRecoilState(birthdayState);
    const router = useRouter();
    
    const yearBlocks = new Array(100).fill(1).map((_, i) => {
        if (i < today.diff(birthDay, "years")) {
            return (
                // <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                    <S.PastBlock key={i} 
                        onClick={() => { router.push(`/${(birthDay.add(i, "years").year())}`) }}
                    >{i}</S.PastBlock>
                // </Popover>
            )
        }

        if (i === today.diff(birthDay, "years")) {
            return (
                // <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                    <S.PresentBlock key={i} 
                        onClick={() => { router.push(`/${(birthDay.add(i, "years").year())}`) }}
                        style={{ fontSize: "15px" }}
                    ><CaretRightOutlined />
                    </S.PresentBlock>
                // </Popover>
            )
        }

        if (i - 1 === today.diff(birthDay, "years")) {
            return (
                // <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                    <S.PresentBlock key={i} 
                        onClick={() => { router.push(`/${(birthDay.add(i, "years").year())}`) }}
                    >{i}</S.PresentBlock>
                // </Popover>
            )
        }

        return (
            // <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                <S.FutureBlock key={i} 
                    onClick={() => { router.push(`/${(birthDay.add(i, "years").year())}`) }}
                >{i}</S.FutureBlock>
            // </Popover>
        )
    })

    return (
        <>
            <S.Birthday>
                <S.AsideText>지금까지 살아온 날</S.AsideText>                
                <S.AsideText style={{color:"gray", "fontSize":"11px"}}>{String(today.diff(birthDay, "weeks"))==="NaN"?"0":today.diff(birthDay, "weeks")}주 / 5200주</S.AsideText>
                <Progress percent={today.diff(birthDay, "weeks")/5200*100} size="small" strokeColor={blue[5]} showInfo={false}/>
            </S.Birthday>
            <S.TotalYearsSection>
                <S.YearBlockContainer>
                    {yearBlocks}
                </S.YearBlockContainer>
            </S.TotalYearsSection>
        </>
    )
}

export default RightAside