import React, { useState } from 'react'
import * as S from '@/styles/common_style'
import styled from '@emotion/styled'
import { Button, DatePicker, Input, Radio } from 'antd'
import { useRouter } from 'next/router'
import { CheckOutlined, LeftOutlined } from '@ant-design/icons'
import dayjs, { Dayjs } from 'dayjs'
import CustomDatePicker from '@/components/commons/CustomDatePicker'

type Props = {}

const create = (props: Props) => {
    const router = useRouter()
    const { TextArea } = Input;

    const Form = styled.form`
        padding: 20px 0px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    `
    const MoodSection = styled.section`
    
    justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        label{
            text-align: center;
            font-size: 13px;
            color: gray;
        }
    `

    const MoodContainer = styled.div`    
        justify-content: center;
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
    `

    const [mood, setMood] = useState('보통')

    const Mood = styled.button`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: ${(props) => mood === props.id ? "#1677ff" : "#fff"} ;
        color: ${(props) => mood === props.id ? "#fff" : "default"};
        border: 1px solid ${(props) => mood === props.id ? "#1677ff" : "#dae1e6"} ;
        font-size: 11px;
        cursor: pointer;
        border-radius: 3px;
    `
    const Imoge = styled.h2`
        
    `

    if (!router.query) { return <></> }

    const onClickMood = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setMood(e.currentTarget.id)
    }

    return (
        <>
            <S.Title>새 글 작성</S.Title>
            <S.ButtonsWrapper>
                <Button
                    onClick={() => router.push(`/${router.query.year}/${router.query.date}`)}
                ><LeftOutlined /> 뒤로</Button>
                <CustomDatePicker isCreate={true} />
                <Button type="primary"><CheckOutlined /> 등록</Button>
            </S.ButtonsWrapper>
            <Form>
                <MoodSection>
                    <label>오늘은 어떠셨나요?</label>
                    <MoodContainer>
                        <Mood onClick={onClickMood} id="보통">
                            <Imoge>😑</Imoge>
                            보통
                        </Mood>
                        <Mood onClick={onClickMood} id="뿌듯">
                            <Imoge>😊</Imoge>
                            뿌듯
                        </Mood>
                        <Mood onClick={onClickMood} id="행복">
                            <Imoge>😄</Imoge>
                            행복
                        </Mood>
                        <Mood onClick={onClickMood} id="설렘">
                            <Imoge>🥰</Imoge>
                            설렘
                        </Mood>
                        <Mood onClick={onClickMood} id="평온">
                            <Imoge>😌</Imoge>
                            평온
                        </Mood>
                        <Mood onClick={onClickMood} id="슬픔">
                            <Imoge>😭</Imoge>
                            슬픔
                        </Mood>
                        <Mood onClick={onClickMood} id="피곤">
                            <Imoge>😩</Imoge>
                            피곤
                        </Mood>
                        <Mood onClick={onClickMood} id="불안">
                            <Imoge>😰</Imoge>
                            불안
                        </Mood>
                        <Mood onClick={onClickMood} id="우울">
                            <Imoge>😔</Imoge>
                            우울
                        </Mood>
                        <Mood onClick={onClickMood} id="화남">
                            <Imoge>😡</Imoge>
                            화남
                        </Mood>
                    </MoodContainer>

                </MoodSection>

                <TextArea
                    id="contents"
                    showCount
                    maxLength={1000}
                    style={{ height: 300, resize: 'none' }}
                    // onChange={onChange}
                    placeholder="오늘의 하루를 기록해주세요."
                />
            </Form>

        </>
    )
}

export default create