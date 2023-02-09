import React, { useState } from 'react'
import * as S from '@/styles/common_style'
import * as C from './style'
import { Button, Input } from 'antd'
import { useRouter } from 'next/router'
import { CheckOutlined, LeftOutlined } from '@ant-design/icons'
import CustomDatePicker from '@/components/commons/CustomDatePicker'
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/pages/_app'
import dayjs from 'dayjs'

const { TextArea } = Input;

const create = () => {
    const router = useRouter();
    const [mood, setMood] = useState('보통');
    const [contents, setContents] = useState('');
    const thisDay = dayjs(router.query.year + "-" + router.query.date);


    const onClickMood = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setMood(e.currentTarget.id)
    };

    const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.currentTarget.value)
    };

    const onSubmit = async () => {
        try {
            await addDoc(collection(db, "Diary"), {
                mood,
                contents,
                date: thisDay.format("YYYY-MM-DD"),
                createdAt: dayjs().format()
            });
            router.push(`/${router.query.year}/${router.query.date}`)
        } catch (e) {
        }
    }

    if (!router.query) { return <></> }

    return (
        <>
            <S.Title>새 글 작성</S.Title>
            <S.ButtonsWrapper>
                <Button
                    onClick={() => router.push(`/${router.query.year}/${router.query.date}`)}
                ><LeftOutlined /> 뒤로</Button>
                <CustomDatePicker isCreate={true} />
                <Button type="primary" onClick={onSubmit}><CheckOutlined /> 등록</Button>
            </S.ButtonsWrapper>
            <C.Form>
                <C.MoodSection>
                    <label>오늘은 어떠셨나요?</label>
                    <C.MoodContainer>
                        <C.Mood onClick={onClickMood} id="보통" mood={mood}>
                            <C.Imoge>😑</C.Imoge>
                            보통
                        </C.Mood>
                        <C.Mood onClick={onClickMood} id="뿌듯" mood={mood}>
                            <C.Imoge>😊</C.Imoge>
                            뿌듯
                        </C.Mood>
                        <C.Mood onClick={onClickMood} id="행복" mood={mood}>
                            <C.Imoge>😄</C.Imoge>
                            행복
                        </C.Mood>
                        <C.Mood onClick={onClickMood} id="설렘" mood={mood}>
                            <C.Imoge>🥰</C.Imoge>
                            설렘
                        </C.Mood>
                        <C.Mood onClick={onClickMood} id="평온" mood={mood}>
                            <C.Imoge>😌</C.Imoge>
                            평온
                        </C.Mood>
                        <C.Mood onClick={onClickMood} id="슬픔" mood={mood}>
                            <C.Imoge>😭</C.Imoge>
                            슬픔
                        </C.Mood>
                        <C.Mood onClick={onClickMood} id="피곤" mood={mood}>
                            <C.Imoge>😩</C.Imoge>
                            피곤
                        </C.Mood>
                        <C.Mood onClick={onClickMood} id="불안" mood={mood}>
                            <C.Imoge>😰</C.Imoge>
                            불안
                        </C.Mood>
                        <C.Mood onClick={onClickMood} id="우울" mood={mood}>
                            <C.Imoge>😔</C.Imoge>
                            우울
                        </C.Mood>
                        <C.Mood onClick={onClickMood} id="화남" mood={mood}>
                            <C.Imoge>😡</C.Imoge>
                            화남
                        </C.Mood>
                    </C.MoodContainer>

                </C.MoodSection>
                <TextArea
                    id="contents"
                    showCount
                    maxLength={1000}
                    style={{ height: 300, resize: 'none' }}
                    onChange={onChangeContents}
                    placeholder="오늘의 하루를 기록해주세요."
                />
            </C.Form>
        </>
    )
}

export default create
