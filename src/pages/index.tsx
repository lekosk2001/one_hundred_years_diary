import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
	const router = useRouter()

	useEffect(() => {
		router.push(`${dayjs().year()}`)
	}, [])

	return (
		<div>
			로그인
		</div>
	)
}
