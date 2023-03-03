import Layout from '@/components/commons/layouts/Layout'
import { firebaseConfig } from '@/firebase/firebaseConfig';
import { darkModeState } from '@/store/atoms';
import '@/styles/globals.css'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useEffect } from 'react';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)

export default function App({ Component, pageProps }: AppProps) {

	
    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme == "dark") {
            document.body.classList.toggle("dark-theme");
    
        } else {
            document.body.classList.toggle("light-theme");
        }
    
    }, [])
	return (
		<RecoilRoot>
			<Head>
				<title>100년 다이어리</title>
				<meta property="og:title" content="100년 다이어리" />
				<meta
					property="og:description"
					content="한 눈에 보는 나의 인생"
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
	)
}
