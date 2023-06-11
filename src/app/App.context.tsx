"use client";
import { createContext } from "react";

export const AppContext = createContext<AppContextProps>({
  navbar: {
    title: "",
    bookNowBtn: "",
  },
  header: {
    title: "",
    videoSrc: "",
    content: [],
  },
  aboutUs: {
    title: "",
    content: "",
    image: "",
  },
});

interface AppContextProps {
  navbar: NavbarSection;
  header: HeaderSection;
  aboutUs: AboutUsSection;
}

interface NavbarSection {
  title: string;
  bookNowBtn: string;
}

interface HeaderSection {
  title: string;
  videoSrc: string;
  content: Array<string>;
}

interface AboutUsSection {
  title: string;
  content: string;
  image: string;
}
