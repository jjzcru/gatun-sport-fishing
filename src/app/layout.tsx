import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Gatun Sport Fishing',
	description: '',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta name="description" content="4.8 Stars rating all around charter websites. Over 20 years of experience along with the best atention, gear and boats of all Gatun lake. Our goal is to give you the best fishing experience ever."/>
			</head>
			<body className={inter.className}>
				{children}
				<Script src="/sticky.js" />
			</body>
		</html>
	);
}
