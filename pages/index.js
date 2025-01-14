import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function Home() {
	return (
		<div className="text-black bg-black">
			<NextSeo
				title="Home: nine4"
				description="Welcome to nine4 homepage."
				canonical="https://nine4-3.vercel.app/"
				openGraph={{
					url: "https://nine4-3.vercel.app/",
				}}
			/>
			<Head>
				<title>nine4</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
