import styles from '../page.module.css';

export default function Navbar() {
	return (
		<nav id={'navbar'} className={styles.navbar}>
			<div>Gatun</div>
			<button>Book Now</button>
		</nav>
	);
}
