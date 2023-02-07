import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Year from './[year]';

export default function Home() {
	const router = useRouter()

	useEffect(() => {
		router.push(`${dayjs().year()}`)
	}, [])

	return (
		<>
			<Year />
		</>
	)
}
