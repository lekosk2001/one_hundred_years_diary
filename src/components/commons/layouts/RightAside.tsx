import { CaretRightOutlined } from '@ant-design/icons'
import { Input, Popover } from 'antd'
import { Dayjs } from 'dayjs'
import { useRouter } from 'next/router'
import React from 'react'
import * as S from './RightAsied_style'

type Props = {
    onchangeBirthDay: (e: React.ChangeEvent<HTMLInputElement>) => void
    birthDay: Dayjs
    today: Dayjs
}

const RightAside = (props: Props) => {
    const router = useRouter();

    if (!router.isReady) { return <></> }

    const yearBlocks = new Array(100).fill(1).map((_, i) => {
        if (i < props.today.diff(props.birthDay, "years")) {
            return (
                <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                    <S.YearBlock
                        onClick={() => { router.push(`/${(props.birthDay.add(i, "years").year())}`) }}
                        style={{
                            backgroundColor: '#ffc568',
                            border: '1px solid #ffc568',
                        }}
                    >{i}</S.YearBlock>
                </Popover>
            )
        }

        if (i === props.today.diff(props.birthDay, "years")) {
            return (
                <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                    <S.YearBlock
                        onClick={() => { router.push(`/${(props.birthDay.add(i, "years").year())}`) }}
                        style={{
                            fontSize: "15px",
                            backgroundColor: '#1677ff',
                            border: '1px solid #1677ff',
                            color: "#fff"
                        }}
                    ><CaretRightOutlined />
                    </S.YearBlock>
                </Popover>
            )
        }

        if (i - 1 === props.today.diff(props.birthDay, "years")) {
            return (
                <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                    <S.YearBlock
                        onClick={() => { router.push(`/${(props.birthDay.add(i, "years").year())}`) }}
                        style={{
                            backgroundColor: '#1677ff',
                            border: '1px solid #1677ff',
                            color: "#fff"
                        }}
                    >{i}</S.YearBlock>
                </Popover>
            )
        }

        return (
            <Popover key={i} content={(props.birthDay.add(i, "years").year())} mouseEnterDelay={0} mouseLeaveDelay={0} >
                <S.YearBlock
                    onClick={() => { router.push(`/${(props.birthDay.add(i, "years").year())}`) }}
                >{i}</S.YearBlock>
            </Popover>
        )
    })

    return (
        <>
            <S.Birthday>
                <p>내 생일 : </p>
                <Input
                    type='date'
                    onChange={props.onchangeBirthDay}
                    defaultValue={props.birthDay.format("YYYY-MM-DD")}>
                </Input>
            </S.Birthday>
            <S.Birthday>
                <p>지금까지 : </p>
                <p>{props.today.diff(props.birthDay, "weeks")}주를 살아왔습니다.</p>
                <p>{props.birthDay.add(100, "years").diff(props.today, "weeks")}주를 더 살아갈 수 있습니다.</p>
            </S.Birthday>
            {/* <S.TotalYearsSection>
                <S.YearBlockContainer>
                    {yearBlocks}
                </S.YearBlockContainer>
            </S.TotalYearsSection> */}
        </>
    )
}

export default RightAside