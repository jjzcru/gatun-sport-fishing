import styles from './page.module.css';

export function Navbar() {
	return (
		<nav id={'navbar'} className={styles.navbar}>
			<div>Gatun</div>
			<button>Book Now</button>
		</nav>
	);
}

export function Header() {
	return (
		<header className={styles.header}>
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

export function Description() {
	return (
		<section className={styles.description}>
			<div></div>
		</section>
	);
}
