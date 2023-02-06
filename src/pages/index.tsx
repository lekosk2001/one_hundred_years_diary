import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Years from './[years]';

export default function Home() {
	const router = useRouter()

	useEffect(() => {
		router.push(`${dayjs().year()}`)
	}, [])

	return (
		<>
			<Years />
		</>
	)
}
