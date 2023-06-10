// import Image from 'next/image';
import styles from './page.module.css';

import Navbar from './sections/Navbar';
import Header from './sections/Header';
import AboutUs from './sections/AboutUs';
import Fish from './sections/Fish';
import Footer from './sections/Footer';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Header />
				<AboutUs />
				<Fish />
				<Footer />
			</main>
		</>
	);
}
