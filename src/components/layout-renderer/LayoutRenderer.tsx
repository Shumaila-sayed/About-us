import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Head from 'next/head';

function LayoutRenderer({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<Head>
				<link
					rel='icon'
					type='image/svg'
					sizes='16x16'
					href='/logo.svg'
				/>
			</Head>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

export default LayoutRenderer;
