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

dayjs.locale('ko');
dayjs.extend(relativeTime)

interface Data {
    contents: string
    createdAt: string
    mood: string
    date: string
}

const Date = () => {

    const moodImoge = (mood: string) => {
        if (mood === "보통") { return "😑" }
        if (mood === "뿌듯") { return "😊" }
        if (mood === "행복") { return "😄" }
        if (mood === "설렘") { return "🥰" }
        if (mood === "평온") { return "😌" }
        if (mood === "슬픔") { return "😭" }
        if (mood === "피곤") { return "😩" }
        if (mood === "불안") { return "😰" }
        if (mood === "우울") { return "😔" }
        if (mood === "화남") { return "😡" }
    }

    const router = useRouter()
    const thisDay = dayjs(router.query.year + "-" + router.query.date)
    const [diaryData, setDiaryData] = useState<Data[]>([])

    const getDiary = async () => {
        const dataArray: Data[] = []
        const result = await getDocs(query(collection(db, "Diary"), orderBy("createdAt", "desc")));

        result.docs.map((doc: DocumentData) => { dataArray.push(doc.data()) });
        setDiaryData(dataArray.filter((doc) => doc.date === thisDay.format("YYYY-MM-DD")))
    }

    useEffect(() => {
        getDiary()
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
                {diaryData.map((el, i) => {
                    return (
                        <Card
                            key={i}
                            style={{
                                width: "100%",
                                border: "1px solid #dae1e6",
                                paddingBottom: "10px"
                            }}
                            hoverable={true}
                        >
                            <S.CardHeader>
                                <h3>{`${moodImoge(el.mood)} ${el.mood}`}</h3>
                                <p>{dayjs(el.createdAt).fromNow()}</p>
                            </S.CardHeader>
                            <S.CardContents>
                                {el.contents}
                            </S.CardContents>
                        </Card>
                    )
                })}
            </S.DiaryCardList>
        </>
    )
}

export default Date