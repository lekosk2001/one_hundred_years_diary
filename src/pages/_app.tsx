import Layout from '@/components/commons/layout'
import { firebaseConfig } from '@/firebase/firebaseConfig';
import '@/styles/globals.css'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import type { AppProps } from 'next/app'

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
