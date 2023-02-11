import * as S from './Year_style'
import { Button, Modal } from 'antd'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import 'dayjs/locale/ko';
import { CalendarOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs, orderBy, query } from 'firebase/firestore';
import { Data } from '@/components/units/list/dataType';
import Calendar from '@/components/commons/Calendar';
import PageTitle from '@/components/commons/PageTitle';
import { db } from '@/pages/_app';
import { ButtonsWrapper } from '@/components/commons/PageButtons';

dayjs.locale('ko');

const Year = () => {

    const [diaryData, setDiaryData] = useState<Data[]>([])
    const router = useRouter()
    const today = dayjs()
    const currentYear = Number(router.query.year)

    const petchDiary = async () => {
        const dataArray: Data[] = []

        try {
            const result = await getDocs(query(collection(db, "Diary"), orderBy("createdAt", "desc")));

            result.docs.map((doc: DocumentData) => {
                dataArray.push({ ...doc.data(), id: doc.id })
            });
            setDiaryData(dataArray)
        } catch (error) {
            Modal.error({ content: "에러" })
        }

    }

    useEffect(() => {
        petchDiary()
    }, [])


    const fullCalendar = []
    for (let index = 0; index < 12; index++) {
        fullCalendar.push(
            <Calendar
                key={index}
                currentYear={currentYear}
                month={index}
                diaryData={diaryData}
            />
        )
    }


    if (!currentYear) { return <></> }

    const getSub = () => {
        if (currentYear === today.year()) { return "오늘은 " + today.format("YYYY년 MM월 DD일 dddd입니다.") }
        if (currentYear < today.year()) { return "오늘로부터 " + (today.year() - currentYear) + "년 전입니다." }
        if (currentYear > today.year()) { return "오늘로부터 " + (currentYear - today.year()) + "년 후입니다." }
        return ""
    }

    return (
        <>
            <PageTitle title={currentYear + "년"} sub={getSub()} />

            <ButtonsWrapper>
                <Button onClick={() => { router.push(`/${currentYear - 1}`) }}>
                    <CaretLeftOutlined /> 작년
                </Button>
                <Button onClick={() => { router.push(`${dayjs().year()}`) }}>
                    <CalendarOutlined /> 올해
                </Button>

                <Button onClick={() => { router.push(`/${currentYear + 1}`) }}>내년 <CaretRightOutlined /></Button>
            </ButtonsWrapper>

            <S.CalendarContainer>
                {fullCalendar}
            </S.CalendarContainer>
        </>
    )
}

export default Year
