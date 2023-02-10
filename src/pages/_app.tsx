import Layout from '@/components/commons/layout'
import { firebaseConfig } from '@/firebase/firebaseConfig';
import '@/styles/globals.css'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>100년 다이어리</title>
			</Head>
			<Layout>
				<Component {...pageProps} />

			</Layout>
		</>
	)
}
