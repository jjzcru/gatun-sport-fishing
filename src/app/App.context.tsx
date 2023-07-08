'use client';
import { createContext } from 'react';

export const AppContext = createContext<AppContextProps>({
	navbar: {
		title: '',
		bookNowBtn: '',
	},
	header: {
		title: '',
		videoSrc: '',
		content: [],
	},
	aboutUs: {
		title: '',
		content: [],
		image: '',
		subtitle: '',
		label: '',
	},
	bookWithUs: {
		title: '',
		content: [],
		video: '',
	},
	fish: {
		title: '',
		description: '',
		fishes: [],
	},
	details: [],
	gallery: {
		title: '',
		images: [],
	},
	footer: {
    logo: "",
		contactUs: {
			title: '',
			description: '',
			email: {
				text: '',
				address: '',
				subject: '',
			},
			copyright: '',
			privacy: {
				text: '',
				url: '',
			},
		},
		address: {
			title: '',
			mapUrl: '',
			address1: '',
			address2: '',
			phone: {
				text: '',
				number: '',
			},
		},
		social: {
			instagram: '',
			wa: '',
			tiktok: '',
		},
	},
	faq: {
		title: '',
		description: '',
		image: '',
		viewMoreBtn: '',
		questions: [],
	},
});

interface AppContextProps {
	navbar: NavbarSection;
	header: HeaderSection;
	aboutUs: AboutUsSection;
	bookWithUs: BookWithUsSection;
	fish: FishSection;
	details: Array<DetailSection>;
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
	label?: string;
}

export interface DetailSection {
	title: string;
	content: Array<string>;
	background?: string;
	color?: string;
	image: {
		src: string;
		label?: string;
	};
}

interface BookWithUsSection {
	title: string;
	content: Array<string>;
	video: string;
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
  logo: string;
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
