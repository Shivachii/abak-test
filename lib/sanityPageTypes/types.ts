export type HawzaPageTypes = {
  locale: string;
  title: string;
  subtitle: string;
  about: {
    title: string;
    subtitle: string;
    description: string;
  };
  establishment: {
    mainTitle: string;
    vision: TextBlock;
    mission: TextBlock;
    impact: TextBlock;
  };
  admissions: TextBlock[];
  students: TextBlock[];
  curriculum: TextBlock[];
  facilities: TextBlock[];
  support: {
    title: string;
    description: string;
    bank_details: BankDetail[];
  };
  scholarshipSection: {
    heading: string;
    intro: string;
    details: string;
    impact: string;
    types: ScholarshipType[];
    image?: {
      asset: {
        url: string;
      };
    };
  };
};

type TextBlock = {
  title: string;
  description: string;
};

type BankDetail = {
  label: string;
  value: string;
};

type ScholarshipType = {
  icon: string;
  title: string;
  description: string;
};

export type ContactData = {
  headline: string;
  intro: string;
  infoTitle: string;
  infoNote: string;
  addressTitle: string;
  address: string;
  emailTitle: string;
  emails: string[];
  phoneTitle: string;
  phones: string[];
};

export type Objective = {
  title: string;
  description: string;
};

export type Props = {
  data: {
    heading: string;
    title: string;
    description: string;
    objectives: Objective[];
    ctaText: string;
    ctaLink: string;
  };
};

export interface AboutProps {
  data: {
    tagline: string;
    title: string;
    intro: string;
    intromid: string;
    intro2: string;
    linkText: string;
    image?: ImageAsset;
  };
}

export interface ImageAsset {
  asset: {
    _ref?: string;
    _type?: string;
    url: string;
  };
}

export interface AESPSectionData {
  title: string;
  intro: string;
  requirementsTitle: string;
  requirementsGroupOne: string[];
  requirementsGroupTwo: string[];
  disclaimer: string;
  ctaLink?: string;
  ctaText?: string;
}

export interface CorePrinciplesProps {
  data: {
    valuesHeading: string;
    valuesTitle: string;
    valuesDescription: string;
    principles: string[];
    MissionandVisionSection: string;
    missionTitle: string;
    missionDescription: string;
    visionTitle: string;
    visionDescription: string;
  };
}

export interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface EventsProps {
  data: {
    title: string;
    description: string;
    linkText: string;
    events: Event[];
  };
}

export interface EventItem {
  _id: string;
  title: string;
  slug: string;
  date: string;
  location: string;
  description: string;
  images?: string; // bannerImage url
  lang: "en" | "sw" | "ar" | "fa";
  parent?: {
    title: string;
    slug: string;
  };
}
