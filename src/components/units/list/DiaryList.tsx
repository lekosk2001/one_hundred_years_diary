import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Input, Modal } from 'antd'
import * as S from './DiaryList_style'
import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import dayjs, { Dayjs } from 'dayjs'
import CustomDatePicker from '@/components/commons/CustomDatePicker'
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime'
import { collection, DocumentData, getDocs, limit, orderBy, query } from "firebase/firestore";
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
    const { Search } = Input;

    const petchDiary = async () => {

        const dataArray: Data[] = []

        try {
            const result = await getDocs(query(collection(db, "Diary"), orderBy("createdAt", "desc"), limit(10)));
            result.docs.map((doc: DocumentData) => { dataArray.push({ ...doc.data(), id: doc.id }) });
            setDiaryData(props.thisDay ? dataArray.filter((doc) => props.thisDay ? doc.date === props.thisDay.format("YYYY-MM-DD") : doc) : dataArray)
        } catch (error) {
            Modal.error({ content: "에러" })
        }
    }

    useEffect(() => {
        petchDiary()
    }, [])

    if (props.thisDay && !router.query.year || props.thisDay && !router.query.date) { return <></> }

    return (
        <>
            <PageTitle
                title={props.thisDay ? props.thisDay.format("YYYY년 MM월 DD일") : "피드"}
                sub={props.thisDay ? props.thisDay.format("dddd") : "최근에 이런 생각들을 했습니다."}
            />
            <ButtonsWrapper>
                {props.thisDay && <Button onClick={() => router.push(`/${router.query.year}`)}><LeftOutlined /> 뒤로</Button>}
                {props.thisDay && <CustomDatePicker isCreate={false} />}
                {!props.thisDay && <Search placeholder="다이어리 검색" allowClear onSearch={() => { }} />}
                <Button onClick={() =>
                    router.push(`/${router.query.year}/${router.query.date}/create`)
                }><EditOutlined /> 작성</Button>
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
                                // width: "100%",
                                border: "1px solid #dae1e6",
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
                            <S.CardImage src={diary.imageUrl} />
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