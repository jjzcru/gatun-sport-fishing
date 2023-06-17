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
    content: [],
    image: "",
    subtitle: "",
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
  footer: {
    contactUs: {
      title: "",
      description: "",
      email: {
        text: "",
        address: "",
        subject: "",
      },
      copyright: "",
      privacy: {
        text: "",
        url: "",
      },
    },
    address: {
      title: "",
      mapUrl: "",
      address1: "",
      address2: "",
      phone: {
        text: "",
        number: "",
      },
    },
    social: {
      instagram: "",
      wa: "",
      tiktok: "",
    },
  },
  faq: {
    title: "",
    description: "",
    image: "",
    viewMoreBtn: "",
    questions: [],
  },
});

interface AppContextProps {
  navbar: NavbarSection;
  header: HeaderSection;
  aboutUs: AboutUsSection;
  fish: FishSection;
  gallery: GallerySection;
  footer: FooterSection;
  faq: FaqSection;
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
  subtitle: string;
  content: Array<string>;
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

interface FooterSection {
  contactUs: ContactUs;
  address: Address;
  social: Social;
}

interface FaqSection {
  title: string;
  description: string;
  image: string;
  viewMoreBtn: string;
  questions: Array<{
    question: string;
    answer: Array<string>;
  }>;
}

export interface FishData {
  id: string;
  description: Array<string>;
  label: string;
  primaryImage: string;
  images: Array<string>;
}

export interface ContactUs {
  title: string;
  description: string;
  email: {
    text: string;
    address: string;
    subject: string;
  };
  copyright: string;
  privacy: {
    text: string;
    url: string;
  };
}

export interface Address {
  title: string;
  mapUrl: string;
  address1: string;
  address2: string;
  phone: {
    text: string;
    number: string;
  };
}

export interface Social {
  instagram: string;
  wa: string;
  tiktok: string;
}
