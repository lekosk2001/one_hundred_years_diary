import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {  Card, Select } from 'antd'
import * as S from './DiaryList_style'
import { CaretLeftOutlined, CaretRightOutlined, EditOutlined, LeftOutlined } from '@ant-design/icons'
import dayjs, { Dayjs } from 'dayjs'
import CustomDatePicker from '@/components/commons/CustomDatePicker'
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime'
import { collection, DocumentData, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from '@/pages/_app'
import { moodImoge } from '@/utils/moodImoge'
import PageTitle from '@/components/commons/PageTitle'
import { ButtonsWrapper } from '@/components/commons/PageButtons'
import { Data } from '@/components/units/list/dataType'

dayjs.locale('ko');
dayjs.extend(relativeTime)

interface Props {
    thisDay: Dayjs | null
}

const Date = (props: Props) => {

    const router = useRouter()
    const [diaryData, setDiaryData] = useState<Data[]>([])

    const petchDiary = async (keyword: string) => {

        const dataArray: Data[] = []

        if (props.thisDay) {
            try {
                const result = await getDocs(query(collection(db, "Diary"),
                    where("deletedAt", "==", null),
                    where("date", "==", props.thisDay.format("YYYY-MM-DD")),
                    orderBy("createdAt", "desc"), limit(10)
                ));
                result.docs.map((doc: DocumentData) => { dataArray.push({ ...doc.data(), id: doc.id }) });
                setDiaryData(dataArray)
                console.log("무검색")
            } catch (error) {
                console.log(error)
            }
        }

        else if (keyword) {
            try {
                const result = await getDocs(query(collection(db, "Diary"),
                    where("deletedAt", "==", null),
                    where("mood", '==', keyword),
                    orderBy("createdAt", "desc"),
                    limit(10)
                ));

                console.log("검색")
                result.docs.map((doc: DocumentData) => { dataArray.push({ ...doc.data(), id: doc.id }) });
                setDiaryData(dataArray)
            } catch (error) {
                console.log(error)
            }
        }

        else {
            try {
                const result = await getDocs(query(collection(db, "Diary"),
                    where("deletedAt", "==", null),
                    orderBy("createdAt", "desc"),
                    limit(10)
                ));
                result.docs.map((doc: DocumentData) => { dataArray.push({ ...doc.data(), id: doc.id }) });
                setDiaryData(dataArray)

                console.log("무검색")
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        petchDiary('')
    }, [props.thisDay])

    const handleChange = (value: string) => {
        petchDiary(value)
    };

    if (props.thisDay && !router.query.year || props.thisDay && !router.query.date) { return <></> }

    return (
        <>
            <PageTitle
                title={props.thisDay ? props.thisDay.format("YYYY년 MM월 DD일") : "피드"}
                sub={props.thisDay ? props.thisDay.format("dddd") : "최근에 이런 생각들을 했습니다."}
            />
            <ButtonsWrapper>
                {props.thisDay && <S.StyledButton onClick={() => router.push(`/${router.query.year}`)}><LeftOutlined /> 뒤로</S.StyledButton>}
                {props.thisDay && <CaretLeftOutlined onClick={() => { router.push(`/${props.thisDay?.subtract(1, "day").format('YYYY/MM-DD')}`) }}></CaretLeftOutlined>}
                {props.thisDay && <CustomDatePicker isCreate={false} />}
                {!props.thisDay&& <Select
                        defaultValue="없음"
                        style={{ width: "100%" }}
                        onChange={handleChange}
                        placeholder="기분"
                        allowClear
                        options={[
                            { value: '보통', label: '😑 보통' },
                            { value: '뿌듯', label: '😊 뿌듯' },
                            { value: '행복', label: '😄 행복' },
                            { value: '설렘', label: '🥰 설렘' },
                            { value: '평온', label: '😌 평온' },
                            { value: '슬픔', label: '😭 슬픔' },
                            { value: '피곤', label: '😩 피곤' },
                            { value: '불안', label: '😰 불안' },
                            { value: '우울', label: '😔 우울' },
                            { value: '화남', label: '😡 화남' },
                        ]}
                />}
                
                {/* {!props.thisDay && <Search placeholder="다이어리 검색" allowClear onSearch={(value) => { petchDiary(value) }} />} */}
                {props.thisDay && <CaretRightOutlined onClick={() => { router.push(`/${props.thisDay?.add(1, "day").format('YYYY/MM-DD')}`) }}></CaretRightOutlined>}
                <S.StyledButton onClick={() => router.push(`${props.thisDay ? props.thisDay.format("/YYYY/MM-DD/") + "create" : dayjs().format("/YYYY/MM-DD/") + "create"}`)}><EditOutlined /> 작성</S.StyledButton>
            </ButtonsWrapper>

            <S.DiaryCardList>
                {diaryData.length === 0 && <S.NoDiaryText>다이어리가 없습니다.</S.NoDiaryText>}
                {diaryData.map((diary) => {
                    return (
                        <Card
                            onClick={() =>
                                router.push(`/${dayjs(diary.date).format("YYYY/MM-DD")}/${diary.id}/edit`)
                            }
                            key={diary.id}
                            style={{
                                color:"var(--text-color)",
                                backgroundColor:"var(--background-primary-color)",
                                border: "1px solid var(--border-color)",
                                paddingBottom: "10px",
                                overflow: "hidden"
                            }}
                            hoverable={true}
                        >
                            <S.CardHeader>
                                <S.CardMood>{`${moodImoge(diary.mood)} ${diary.mood}`}</S.CardMood>
                                <S.CardTime>
                                    {`${dayjs(diary.createdAt).format("YYYY.MM.DD. HH:mm")} (${dayjs(diary.createdAt).fromNow()})`}
                                </S.CardTime>
                            </S.CardHeader>
                            {diary.imageUrl && <S.CardImage src={diary.imageUrl} />}
                            <S.CardContents>
                                {diary.contents}
                            </S.CardContents>
                        </Card>
                    )
                })}
            </S.DiaryCardList>
        </>
    )
}

export default Date