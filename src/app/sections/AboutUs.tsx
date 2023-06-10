import styles from '../page.module.css';

export default function AboutUs() {
	return (
		<section className={styles['about-us']}>
			<div>
				<div className={styles['content']}>
					<div>
						<h2>Gatun sport fishing Slogan</h2>
						<hr />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla leo eget feugiat mattis. Nunc non magna pulvinar sem
							ullamcorper vestibulum. Integer interdum neque a diam iaculis,
							quis pharetra diam rutrum. Aenean leo ex, congue a consectetur eu,
							consequat ut odio. Proin tincidunt odio a quam iaculis, sed
							vestibulum libero accumsan. Praesent eu orci ac leo suscipit
							imperdiet. Integer pellentesque non odio eu tincidunt. Morbi ut
							blandit lorem. Proin eros metus, vulputate eu luctus ac, posuere
							eget lorem. Duis turpis nisi, commodo a lectus at, tempor
							consequat nibh. Aliquam erat volutpat. Mauris hendrerit a justo
							eget placerat. Praesent purus leo, posuere commodo odio nec,
							lacinia pulvinar ipsum. Proin tincidunt venenatis arcu ut
							vestibulum. Phasellus eu ante leo. Proin volutpat leo eget justo
							laoreet interdum.
						</p>
					</div>
				</div>
				<div className={styles['image']}></div>
			</div>
		</section>
	);
}
