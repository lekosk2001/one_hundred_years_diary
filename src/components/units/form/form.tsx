import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import * as S from './form_style'
import { Input, Modal } from 'antd'
import { useRouter } from 'next/router'
import { CheckOutlined, DeleteOutlined, LeftOutlined } from '@ant-design/icons'
import CustomDatePicker from '@/components/commons/CustomDatePicker'
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { db, storage } from '@/pages/_app'
import dayjs from 'dayjs'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { imageValidationCheck } from '@/utils/imageValidationCheck'
import PageTitle from '@/components/commons/PageTitle'
import 'dayjs/locale/ko';
import { ButtonsWrapper } from '@/components/commons/PageButtons'
dayjs.locale('ko');
const { TextArea } = Input;

import { Spin } from 'antd';

interface Props {
    id: string | string[] | undefined | null
}

const create = (props: Props) => {
    const router = useRouter();
    const [mood, setMood] = useState('');
    const [contents, setContents] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [id, setId] = useState('')
    const imageRef = useRef<HTMLInputElement>(null);
    const thisDay = dayjs(router.query.year + "-" + router.query.date);

    useEffect(() => {
        if (props.id) { petchDiary() }
    }, [props.id])

    if (!router.query.year) { return <Spin/> }
    if (!router.query.date) { return <Spin/> }

    const petchDiary = async () => {
        try {
            const result = await getDocs(query(collection(db, "Diary"), where("date", "==", thisDay.format("YYYY-MM-DD"))))
            result.docs.forEach((doc) => {
                if (doc.id === props.id) {
                    setId(doc.id)
                    setMood(doc.data().mood)
                    setContents(doc.data().contents)
                    setImageUrl(doc.data().imageUrl)
                }
            })
        } catch (error) {
            Modal.error({ content: "에러" })
        }
    }


    const onClickMood = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setMood(e.currentTarget.id)
    };

    const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.currentTarget.value)
    };

    const onChangeUpload = (event: ChangeEvent<HTMLInputElement>) => {

        if (!event.target.files?.[0]) { setImageUrl(''); return; }
        if (!imageValidationCheck(event.target.files[0])) { setImageUrl(''); return; }

        const imageRef = ref(storage, `images/${event.target.files?.[0]?.name}`)
        uploadBytes(imageRef, event.target.files[0])
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url: string) => {
                        setImageUrl(url);
                    });
            });
    };

    const onClickUploadImage = () => {
        imageRef.current?.click();
    }

    const onSubmit = async () => {

        if (!contents) { Modal.error({ content: "내용이 없습니다." }); return; }
        if (!mood) { Modal.error({ content: "기분을 선택해주세요." }); return; }

        try {
            await addDoc(collection(db, "Diary"), {
                imageUrl,
                mood,
                contents,
                date: thisDay.format("YYYY-MM-DD"),
                createdAt: dayjs().format(),
                updatedAt: null,
                deletedAt: null
            });
            router.push(`/${router.query.year}/${router.query.date}`)
        } catch (e) {
            console.log(e)
        }
    }

    const onUpdate = async () => {
        if (!id) { return }
        if (!contents) { Modal.error({ content: "내용이 없습니다." }); return; }

        const docRef = doc(db, 'Diary', id);
        try {
            await updateDoc(docRef, {
                imageUrl,
                mood,
                contents,
                date: thisDay.format("YYYY-MM-DD"),
                updatedAt: dayjs().format(),
                deletedAt: null
            });
            router.push(`/${router.query.year}/${router.query.date}`)
        } catch (e) {
            console.log(e)
        }
    }

    const onDelete = async () => {
        if (!id) { return }

        const docRef = doc(db, 'Diary', id);
        try {
            await updateDoc(docRef, {
                deletedAt: dayjs().format()
            });
            router.push(`/${router.query.year}/${router.query.date}`)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <PageTitle title={props.id ? "수정" : "새 글 작성"} sub={thisDay.format("YYYY-MM-DD dddd")} />
            <ButtonsWrapper>
                <S.StyledButton
                    onClick={() => router.push(`/${router.query.year}/${router.query.date}`)}
                ><LeftOutlined /> 뒤로</S.StyledButton>
                {!props.id && <CustomDatePicker isCreate={true} />}
                {props.id && <S.StyledButton danger onClick={onDelete}><DeleteOutlined /> 삭제</S.StyledButton>}
                <S.StyledButton type="primary" onClick={props.id ? onUpdate : onSubmit}><CheckOutlined />{props.id ? " 수정" : " 등록"}</S.StyledButton>
            </ButtonsWrapper>

            <S.FormStyle>
                <S.MoodSection>
                    <label>오늘은 어떠셨나요?</label>
                    <S.MoodContainer>
                        <S.Mood onClick={onClickMood} id="보통" mood={mood}>
                            <S.Imoge>😑</S.Imoge>
                            보통
                        </S.Mood>
                        <S.Mood onClick={onClickMood} id="뿌듯" mood={mood}>
                            <S.Imoge>😊</S.Imoge>
                            뿌듯
                        </S.Mood>
                        <S.Mood onClick={onClickMood} id="행복" mood={mood}>
                            <S.Imoge>😄</S.Imoge>
                            행복
                        </S.Mood>
                        <S.Mood onClick={onClickMood} id="설렘" mood={mood}>
                            <S.Imoge>🥰</S.Imoge>
                            설렘
                        </S.Mood>
                        <S.Mood onClick={onClickMood} id="평온" mood={mood}>
                            <S.Imoge>😌</S.Imoge>
                            평온
                        </S.Mood>
                        <S.Mood onClick={onClickMood} id="슬픔" mood={mood}>
                            <S.Imoge>😭</S.Imoge>
                            슬픔
                        </S.Mood>
                        <S.Mood onClick={onClickMood} id="피곤" mood={mood}>
                            <S.Imoge>😩</S.Imoge>
                            피곤
                        </S.Mood>
                        <S.Mood onClick={onClickMood} id="불안" mood={mood}>
                            <S.Imoge>😰</S.Imoge>
                            불안
                        </S.Mood>
                        <S.Mood onClick={onClickMood} id="우울" mood={mood}>
                            <S.Imoge>😔</S.Imoge>
                            우울
                        </S.Mood>
                        <S.Mood onClick={onClickMood} id="화남" mood={mood}>
                            <S.Imoge>😡</S.Imoge>
                            화남
                        </S.Mood>
                    </S.MoodContainer>

                </S.MoodSection>

                <S.ImageUploadSection>
                    <S.StyledButton onClick={onClickUploadImage} style={{ width: "100%" }}>이미지 업로드</S.StyledButton>
                    <input ref={imageRef} type='file' onChange={onChangeUpload} style={{ display: "none" }} />
                    {imageUrl && <img src={imageUrl}></img>}
                </S.ImageUploadSection>

                <TextArea
                    id="contents"
                    value={contents}
                    showCount
                    maxLength={1000}
                    onChange={onChangeContents}
                    placeholder="오늘의 하루를 기록해주세요."
                    style={{height: 300,resize: "none",color:"var(--text-color)"}}
                />
            </S.FormStyle>
        </>
    )
}

export default create
