"use client";
import { Virtual, Navigation, Pagination, Scrollbar } from "swiper";
import { useContext } from "react";
import { AppContext } from "../App.context";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../page.module.css";

export default function Gallery() {
  const { gallery } = useContext(AppContext);
  const { title, images } = gallery;

  let spaceBetween = 20;
  let slidesPerView = 4;
  if (window.innerWidth < 481) {
    slidesPerView = 2;
    spaceBetween = 20;
  }

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <Swiper
          modules={[Virtual, Navigation, Pagination, Scrollbar]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          virtual
        >
          {images.map(({ image }, index) => (
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
