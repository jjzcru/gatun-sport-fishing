// import Image from 'next/image';
import styles from './page.module.css';
import { Navbar, Header, AboutUs } from './sections';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Header />
				<AboutUs />
			</main>
		</>
	);
}
