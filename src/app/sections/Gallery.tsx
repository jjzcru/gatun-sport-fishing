'use client';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../page.module.css';

export default function Gallery() {
	const pictures = [
		{
			image: '/images/fish/sea-bass.jpeg',
		},
		{
			image: '/images/fish/sea-bass.jpeg',
		},
		{
			image: '/images/fish/sea-bass.jpeg',
		},
		{
			image: '/images/fish/sea-bass.jpeg',
		},
	];
	return (
		<section className={styles.gallery}>
			<div className={styles.container}>
				<h2>Gallery</h2>
				<Swiper modules={[Virtual]} spaceBetween={5} slidesPerView={3} virtual>
					{pictures.map(({ image }, index) => (
						<SwiperSlide key={index} virtualIndex={index}>
							<figure>
								<img src={image} alt="logo" />
							</figure>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
// Import Swiper React components

// Import Swiper styles
