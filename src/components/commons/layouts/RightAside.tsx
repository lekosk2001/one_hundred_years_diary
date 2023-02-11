import { CaretRightOutlined } from '@ant-design/icons'
import { Input, Popover } from 'antd'
import { Dayjs } from 'dayjs'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'
import * as S from './RightAsied_style'

type Props = {
    onchangeBirthDay: (e: React.ChangeEvent<HTMLInputElement>) => void
    birthDay: Dayjs
    today: Dayjs
}

const RightAside = (props: Props) => {

    const router = useRouter();

    const yearBlocks = new Array(100).fill(1).map((_, i) => {
        if (i < props.today.diff(props.birthDay, "years")) {
            return (
                <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                    <S.PastBlock
                        onClick={() => { router.push(`/${(props.birthDay.add(i, "years").year())}`) }}
                        style={{
                            backgroundColor: '#ffc568',
                            border: '1px solid #ffc568',
                        }}
                    >{i}</S.PastBlock>
                </Popover>
            )
        }

        if (i === props.today.diff(props.birthDay, "years")) {
            return (
                <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                    <S.PresentBlock
                        onClick={() => { router.push(`/${(props.birthDay.add(i, "years").year())}`) }}
                        style={{ fontSize: "15px" }}
                    ><CaretRightOutlined />
                    </S.PresentBlock>
                </Popover>
            )
        }

        if (i - 1 === props.today.diff(props.birthDay, "years")) {
            return (
                <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                    <S.PresentBlock
                        onClick={() => { router.push(`/${(props.birthDay.add(i, "years").year())}`) }}
                    >{i}</S.PresentBlock>
                </Popover>
            )
        }

        return (
            <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                <S.FutureBlock
                    onClick={() => { router.push(`/${(props.birthDay.add(i, "years").year())}`) }}
                >{i}</S.FutureBlock>
            </Popover>
        )
    })

    return (
        <>
            <S.Birthday>
                <S.AsideText>내 생일 : </S.AsideText>
                <Input
                    type='date'
                    onChange={props.onchangeBirthDay}
                    defaultValue={props.birthDay.format("YYYY-MM-DD")}>
                </Input>
            </S.Birthday>
            <S.Birthday>
                <S.AsideText>지금까지 : </S.AsideText>
                <S.AsideText>{props.today.diff(props.birthDay, "weeks")}주를 살아왔습니다.</S.AsideText>
                <S.AsideText>{props.birthDay.add(100, "years").diff(props.today, "weeks")}주를 더 살아갈 수 있습니다.</S.AsideText>
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