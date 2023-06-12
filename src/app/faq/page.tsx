"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../page.module.css";

import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

import Header from "./sections/Header";
import Faq from "./sections/Faq";

import { AppContext } from "../App.context";
import { useData } from "../App.hooks";

export default function Main() {
  const { data, error } = useData();
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return null;
  const { sections } = data;
  return (
    <AppContext.Provider value={sections}>
      <Navbar />
      <main className={styles.main}>
        <Header />
        <Faq />
        <Footer />
      </main>
    </AppContext.Provider>
  );
}
