import styles from '../page.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<div>
					<h4>Contact Us</h4>

					<p>Text random sobre porque contactarlo</p>

					<p>
						<a href="mailto:gerardoduran30@hotmail.com?subject=Consulta">
							gerardoduran30@hotmail.com
						</a>
					</p>

					<p>© 2023 Gamboa Gatun Association</p>

					<p>Privacy Policy</p>
				</div>
				<div>
					<h4>Address</h4>
					<p>
						<a href="https://goo.gl/maps/H8XZUFixP9uozwYo6">Gamboa</a>
						<br />
						Panama, Panama
						<br />
						<a href="tel:+150769482285">(507) 6948-2285</a>
						<br />
					</p>
					<span className={styles['social']}>
						<a
							href="https://www.instagram.com/gatunsportfishing/"
							target={'_blank'}
						>
							<img src={`/icons/instagram.svg`} />
						</a>
						<a href="https://wa.me/50769482285" target={'_blank'}>
							<img src={`/icons/whatsapp.svg`} />
						</a>
						<a
							href="https://www.tiktok.com/@gerardoduranfishing"
							target={'_blank'}
						>
							<img src={`/icons/tiktok.svg`} />
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}
