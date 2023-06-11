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
});

interface AppContextProps {
  navbar: NavbarSection;
  header: HeaderSection;
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
