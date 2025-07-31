"use client"

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Mission from './components/Mission';

export default function Home() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('/data.json')
			.then((res) => res.json())
			.then(setData);
	}, []);

	if (!data) return <div className='text-center mt-10'>Loading...</div>;

	return (
		<>
			<Header nav={data.header} />
			<Hero content={data.hero} />
			<Mission content={data.mission} />
			<Footer content={data.footer} />
		</>
	);
}
