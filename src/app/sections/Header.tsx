import styles from '../page.module.css';

export default function Header() {
	return (
		<header id={'header'} className={styles.header}>
			<video autoPlay loop playsInline muted>
				<source src="/header.mp4" type="video/mp4" />
			</video>
			<div className={styles.overlay} />
			<div className={styles.content}>
				<h1>Lorem Ipsum</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis
					nisi lorem, non faucibus lorem aliquet sodales.{' '}
				</p>
			</div>
		</header>
	);
}
