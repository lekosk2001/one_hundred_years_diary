import PageTitle from '@/components/commons/PageTitle'
import { birthdayState, darkModeState, sizeToggleState } from '@/store/atoms'
import { InputRef, Switch } from 'antd'
import dayjs from 'dayjs'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './Setting_style'

const Setting = () => {
    
    const [birthDay, setBirthDay] = useRecoilState(birthdayState)
    const [sizeToggle, setSizeToggle] = useRecoilState(sizeToggleState)
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if(currentTheme === "dark"){setDarkMode(true)}

        const currentSize = localStorage.getItem("size");
        if(currentSize === "mini"){setSizeToggle(true)}

        const currentBirthDay = localStorage.getItem("birthday");
        if(currentBirthDay){setBirthDay(dayjs(currentBirthDay))}        
    }, [])
    
    const onchangeBirthDay = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthDay(dayjs(e.target.value))
        localStorage.setItem("birthday", e.target.value)
    }

    const onChangeSize = (checked: boolean) => {
        setSizeToggle(checked)
        if (checked) {localStorage.setItem("size", "mini")}
        else {localStorage.setItem("size", "full")}
    };

    const inputRef = useRef<InputRef>(null);
    const sizeRef = useRef<HTMLButtonElement>(null);
    const darkModeRef = useRef<HTMLButtonElement>(null);

    const onChangeDarkMode = (checked: boolean) => {
        setDarkMode(checked)
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        if (prefersDarkScheme.matches) {
            document.body.classList.toggle("light-theme");
            var theme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
        } else {
            document.body.classList.toggle("dark-theme");
            var theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";
        }
        localStorage.setItem("theme", theme);
    };

    return (
        <>
            <PageTitle
                title="??????"
                sub="????????? ????????? ??????????????? ???????????????."
            />
            <S.SettingContainer>
                <S.SettingItem onClick={()=>{inputRef.current?.select()}}>
                    <S.SettingItemLabelBox>
                        <S.SettingItemLabel>?????? ??????</S.SettingItemLabel>
                        <S.SettingItemDesc>????????? ????????? ??? ????????????.</S.SettingItemDesc>
                    </S.SettingItemLabelBox>
                    <S.StyledInput
                        ref={inputRef}
                        type='date'
                        onChange={onchangeBirthDay}
                        value={birthDay.format("YYYY-MM-DD")}>
                    </S.StyledInput>
                </S.SettingItem>

                <S.SettingItem onClick={()=>{sizeRef.current?.click()}}>
                    <S.SettingItemLabelBox>
                        <S.SettingItemLabel>?????? ??????</S.SettingItemLabel>
                        <S.SettingItemDesc>PC?????? ????????? ????????? ??? ????????????.</S.SettingItemDesc>
                    </S.SettingItemLabelBox>
                    <Switch 
                    ref={sizeRef}
                    checked={sizeToggle}
                    onChange={onChangeSize}/>
                </S.SettingItem>
                
                <S.SettingItem onClick={()=>{darkModeRef.current?.click()}}>
                    <S.SettingItemLabelBox>
                        <S.SettingItemLabel>????????????</S.SettingItemLabel>
                        <S.SettingItemDesc>??????????????? ???????????????.</S.SettingItemDesc>
                    </S.SettingItemLabelBox>
                    <Switch                    
                    ref={darkModeRef}
                    checked={darkMode}
                    onChange={onChangeDarkMode}/>
                </S.SettingItem>

                <S.SettingItem>
                    <S.SettingItemLabelBox>
                        <S.SettingItemLabel>?????????</S.SettingItemLabel>
                        <S.SettingItemDesc>???????????? ?????? ??????????????????.</S.SettingItemDesc>
                    </S.SettingItemLabelBox>
                </S.SettingItem>
            </S.SettingContainer>

            

        </>
    )
}

export default Setting