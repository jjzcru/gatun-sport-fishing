// import Image from 'next/image';
"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./page.module.css";
import useSWR from "swr";

import Navbar from "./sections/Navbar";
import Header from "./sections/Header";
import AboutUs from "./sections/AboutUs";
import Fish from "./sections/Fish";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";

import { AppContext } from "./App.context";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  let language = "es";
  if (navigator?.language?.includes("en")) {
    language = "en";
  }
  const { data, error } = useSWR(`/api/data?lang=${language}`, fetcher);
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return null;
  const { sections } = data;
  return (
    <AppContext.Provider value={sections}>
      <Navbar />
      <main className={styles.main}>
        <Header />
        <AboutUs />
        <Fish />
        <Gallery />
        <Footer />
      </main>
    </AppContext.Provider>
  );
}
