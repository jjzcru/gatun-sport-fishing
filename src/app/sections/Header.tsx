import styles from '../page.module.css';

export default function Header() {
	return (
		<header id={'header'} className={styles.header}>
			<img src="/header.jpg" alt="Header Image" />
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
