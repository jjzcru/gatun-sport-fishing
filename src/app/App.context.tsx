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
  fish: {
    title: "",
    description: "",
    fishes: [],
  },
  gallery: {
    title: "",
    images: [],
  },
});

interface AppContextProps {
  navbar: NavbarSection;
  header: HeaderSection;
  aboutUs: AboutUsSection;
  fish: FishSection;
  gallery: GallerySection;
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

interface FishSection {
  title: string;
  description: string;
  fishes: Array<FishData>;
}

interface GallerySection {
  title: string;
  images: Array<{
    label: string;
    image: string;
  }>;
}

export interface FishData {
  id: string;
  description: Array<string>;
  label: string;
  primaryImage: string;
  images: Array<string>;
}
