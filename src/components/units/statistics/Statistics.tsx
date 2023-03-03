import PageTitle from '@/components/commons/PageTitle'
import { birthdayState } from '@/store/atoms'
import { Progress } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { blue } from '@ant-design/colors'
import * as S from './Statistics_style'
import { collection, DocumentData, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '@/pages/_app'
import { Data } from '@/components/units/list/dataType'
import { Spin } from 'antd';

const Statistics = () => {
    const today = dayjs();
    const [birthDay] = useRecoilState(birthdayState);    
    const [diaryData, setDiaryData] = useState<Data[]>([])
    
    const getAllDiary = async ()=>{        
        const dataArray: Data[] = []
        
        try {
            const result = await getDocs(query(collection(db, "Diary"),
                where("deletedAt", "==", null),
                orderBy("createdAt", "desc"),
            ));
            result.docs.map((doc: DocumentData) => { dataArray.push({ ...doc.data(), id: doc.id }) });
            setDiaryData(dataArray)
    
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllDiary()
    }, [])
    
    const 보통: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="보통"){보통.push(el)}});

    const 뿌듯: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="뿌듯"){뿌듯.push(el)}});

    const 행복: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="행복"){행복.push(el)}});

    const 설렘: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="설렘"){설렘.push(el)}});

    const 평온: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="평온"){평온.push(el)}});

    const 슬픔: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="슬픔"){슬픔.push(el)}});

    const 피곤: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="피곤"){피곤.push(el)}});

    const 불안: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="불안"){불안.push(el)}});
    
    const 우울: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="우울"){우울.push(el)}});
    
    const 화남: Data[] = [];
    diaryData.map((el:Data)=>{if (el.mood==="화남"){화남.push(el)}});

    if(!diaryData){ return <Spin/> }

    return (
        <>
            <PageTitle
                title="통계"
                sub="한 눈에 보는 당신이 걸어온 길"
            />

            <S.GraphContainer>
                <S.GraphItem>
                    <S.GraphItemLabel>지금까지 살아온 날</S.GraphItemLabel>
                    <S.GraphItemDesc >{String(today.diff(birthDay, "weeks"))==="NaN"?"0":today.diff(birthDay, "weeks")}주 / 5200주</S.GraphItemDesc>
                    <Progress percent={today.diff(birthDay, "weeks")/5200*100} steps={50} size="small" strokeColor={blue[5]} showInfo={false}/>
                </S.GraphItem>
                <S.GraphItem>
                    <S.GraphItemLabel>작성한 글</S.GraphItemLabel>
                    <div style={{"display":"flex", 'gap':"10px","flexWrap":"wrap","justifyContent":"center"}}>
                    <S.GraphItemDesc>보통 : {보통.length}</S.GraphItemDesc>
                    <S.GraphItemDesc>뿌듯 : {뿌듯.length}</S.GraphItemDesc>
                    <S.GraphItemDesc>행복 : {행복.length}</S.GraphItemDesc>
                    <S.GraphItemDesc>설렘 : {설렘.length}</S.GraphItemDesc>
                    <S.GraphItemDesc>평온 : {평온.length}</S.GraphItemDesc>
                    <S.GraphItemDesc>슬픔 : {슬픔.length}</S.GraphItemDesc>
                    <S.GraphItemDesc>피곤 : {피곤.length}</S.GraphItemDesc>
                    <S.GraphItemDesc>불안 : {불안.length}</S.GraphItemDesc>
                    <S.GraphItemDesc>우울 : {우울.length}</S.GraphItemDesc>
                    <S.GraphItemDesc>화남 : {화남.length}</S.GraphItemDesc>
                    </div>
                </S.GraphItem>
            </S.GraphContainer>
        </>
    )
}

export default Statistics