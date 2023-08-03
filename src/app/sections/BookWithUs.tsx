import { useContext } from 'react';
import { AppContext } from '../App.context';

import styles from '../page.module.css';

export default function BookWithUs() {
	const { bookWithUs } = useContext(AppContext);
	const { title, content, video } = bookWithUs;

	return (
		<section className={styles['book-with-us']}>
			<div>
				<div className={styles['media']}>
					<video autoPlay loop playsInline muted>
						<source src={video} type="video/mp4" />
					</video>
					<div className={styles.overlay} />
				</div>
				<div className={styles['content']}>
					<div>
						<h2>{title}</h2>
						<div className={styles['divider']} />
						{content.map((c: string, i: number) => (
							<p key={`p-${i}`}>{c}</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
