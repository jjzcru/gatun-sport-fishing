"use client";
import { useContext, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination, Scrollbar } from "swiper";
import { AppContext } from "../App.context";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../page.module.css";

export default function Gallery() {
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 767 ? 2 : 4
  );
  const { gallery } = useContext(AppContext);
  const { title, images } = gallery;

  useEffect(() => {
    const update = () => {
      setSlidesPerView(window.innerWidth < 767 ? 2 : 4);
    };
    window.addEventListener("orientationchange", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("orientationchange", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <Swiper
          modules={[Virtual, Navigation, Pagination, Scrollbar]}
          spaceBetween={20}
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
