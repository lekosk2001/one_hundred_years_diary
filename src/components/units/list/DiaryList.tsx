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
import { Spin } from 'antd';

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

    if (props.thisDay && !router.query.year || props.thisDay && !router.query.date) { return <Spin/> }

    return (
        <>
            <PageTitle
                title={props.thisDay ? props.thisDay.format("YYYY??? MM??? DD???") : "??????"}
                sub={props.thisDay ? props.thisDay.format("dddd") : "????????? ?????? ???????????? ????????????."}
            />
            <ButtonsWrapper>
                {props.thisDay && <S.StyledButton onClick={() => router.push(`/${router.query.year}`)}><LeftOutlined /> ??????</S.StyledButton>}
                {props.thisDay && <CaretLeftOutlined onClick={() => { router.push(`/${props.thisDay?.subtract(1, "day").format('YYYY/MM-DD')}`) }}></CaretLeftOutlined>}
                {props.thisDay && <CustomDatePicker isCreate={false} />}
                {!props.thisDay&& <Select
                        defaultValue="??????"
                        style={{ width: "100%" }}
                        onChange={handleChange}
                        placeholder="??????"
                        allowClear
                        options={[
                            { value: '??????', label: '???? ??????' },
                            { value: '??????', label: '???? ??????' },
                            { value: '??????', label: '???? ??????' },
                            { value: '??????', label: '???? ??????' },
                            { value: '??????', label: '???? ??????' },
                            { value: '??????', label: '???? ??????' },
                            { value: '??????', label: '???? ??????' },
                            { value: '??????', label: '???? ??????' },
                            { value: '??????', label: '???? ??????' },
                            { value: '??????', label: '???? ??????' },
                        ]}
                />}
                
                {/* {!props.thisDay && <Search placeholder="???????????? ??????" allowClear onSearch={(value) => { petchDiary(value) }} />} */}
                {props.thisDay && <CaretRightOutlined onClick={() => { router.push(`/${props.thisDay?.add(1, "day").format('YYYY/MM-DD')}`) }}></CaretRightOutlined>}
                <S.StyledButton onClick={() => router.push(`${props.thisDay ? props.thisDay.format("/YYYY/MM-DD/") + "create" : dayjs().format("/YYYY/MM-DD/") + "create"}`)}><EditOutlined /> ??????</S.StyledButton>
            </ButtonsWrapper>

            <S.DiaryCardList>
                {diaryData.length === 0 && <S.NoDiaryText>??????????????? ????????????.</S.NoDiaryText>}
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