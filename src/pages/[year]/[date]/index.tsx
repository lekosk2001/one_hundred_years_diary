import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card } from 'antd'
import * as S from '@/styles/common_style'
import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import CustomDatePicker from '@/components/commons/CustomDatePicker'
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime'
import { collection, DocumentData, getDocs, orderBy, query } from "firebase/firestore";
import { db } from '@/pages/_app'
import { moodImoge } from '@/commons/moodImoge'

dayjs.locale('ko');
dayjs.extend(relativeTime)

interface Data {
    contents: string
    createdAt: string
    mood: string
    date: string
    id: string
}

const Date = () => {



    const router = useRouter()
    const thisDay = dayjs(router.query.year + "-" + router.query.date)
    const [diaryData, setDiaryData] = useState<Data[]>([])

    const petchDiary = async () => {
        const dataArray: Data[] = []
        const result = await getDocs(query(collection(db, "Diary"), orderBy("createdAt", "desc")));

        result.docs.map((doc: DocumentData) => { dataArray.push({ ...doc.data(), id: doc.id }) });
        setDiaryData(dataArray.filter((doc) => doc.date === thisDay.format("YYYY-MM-DD")))
    }

    useEffect(() => {
        petchDiary()
    }, [])

    if (!router.query) { return <></> }

    return (
        <>
            <S.Title>
                {thisDay.format("YYYY년 MM월 DD일")}
                <S.TodayInfo>
                    {thisDay.format("dddd")}
                </S.TodayInfo>
            </S.Title>

            <S.ButtonsWrapper>
                <Button onClick={() => router.push(`/${router.query.year}`)}><LeftOutlined /> 뒤로</Button>
                <CustomDatePicker isCreate={false} />
                <Button onClick={() =>
                    router.push(`/${router.query.year}/${router.query.date}/create`)
                }><EditOutlined /> 작성</Button>
            </S.ButtonsWrapper>

            <S.DiaryCardList>
                {diaryData.map((diary) => {
                    return (
                        <Card
                            key={diary.id}
                            style={{
                                width: "100%",
                                border: "1px solid #dae1e6",
                                paddingBottom: "10px"
                            }}
                            hoverable={true}
                        >
                            <S.CardHeader>
                                <S.CardMood>{`${moodImoge(diary.mood)} ${diary.mood}`}</S.CardMood>
                                <S.CardTime>
                                    {`${dayjs(diary.createdAt).format("YYYY.MM.DD. HH:mm")} (${dayjs(diary.createdAt).fromNow()})`}
                                </S.CardTime>
                            </S.CardHeader>
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