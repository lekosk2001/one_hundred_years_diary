import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import * as S from '@/styles/common_style'
import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import CustomDatePicker from '@/components/commons/CustomDatePicker'
import 'dayjs/locale/ko';

import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from '@/pages/_app'

dayjs.locale('ko');

interface Data {
    contents: string
    createdAt: string
    mood: string
    date: string
}

const Date = () => {

    const router = useRouter()
    const thisDay = dayjs(router.query.year + "-" + router.query.date)
    const [diaryData, setDiaryData] = useState<Data[]>([])

    const getDiary = async () => {
        const dataArray: Data[] = []
        const result = await getDocs(collection(db, "Diary"));
        result.docs.map((doc: DocumentData) => { dataArray.push(doc.data()) });
        await setDiaryData(dataArray)
        console.log(dataArray)
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
            {diaryData.map((el, i) => { return (<p key={i}>{el.contents}</p>) })}

        </>
    )
}

export default Date