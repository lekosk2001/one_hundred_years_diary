import React, { useState } from 'react'
import * as S from '@/styles/common_style'
import styled from '@emotion/styled'
import { Button, Input, Radio } from 'antd'
import { useRouter } from 'next/router'

type Props = {}

const create = (props: Props) => {
    const router = useRouter()
    const { TextArea } = Input;

    const Form = styled.form`
        padding: 30px 0px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
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
        width: 50px;
        height: 50px;
        background-color: ${(props) => mood === props.id ? "#1677ff" : "#fff"} ;
        color: ${(props) => mood === props.id ? "#fff" : "default"};
        border: 1px solid ${(props) => mood === props.id ? "#1677ff" : "#dae1e6"} ;
        font-size: 13px;
        cursor: pointer;
        border-radius: 3px;
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
                <Button onClick={(router.back)}>취소</Button>
                {router.query && <Input type='date' defaultValue={router.query.years + "-" + router.query.date}></Input>}
                <Button>등록</Button>
            </S.ButtonsWrapper>
            <Form>
                <MoodSection>
                    <label>오늘은 어떠셨나요?</label>
                    <MoodContainer>
                        <Mood onClick={onClickMood} id="보통">
                            보통
                        </Mood>
                        <Mood onClick={onClickMood} id="뿌듯">
                            뿌듯
                        </Mood>
                        <Mood onClick={onClickMood} id="행복">
                            행복
                        </Mood>
                        <Mood onClick={onClickMood} id="설렘">
                            설렘
                        </Mood>
                        <Mood onClick={onClickMood} id="평온">
                            평온
                        </Mood>
                        <Mood onClick={onClickMood} id="슬픔">
                            슬픔
                        </Mood>
                        <Mood onClick={onClickMood} id="피곤">
                            피곤
                        </Mood>
                        <Mood onClick={onClickMood} id="불안">
                            불안
                        </Mood>
                        <Mood onClick={onClickMood} id="우울">
                            우울
                        </Mood>

                        <Mood onClick={onClickMood} id="화남">
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