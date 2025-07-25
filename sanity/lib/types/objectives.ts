export interface ObjectiveSimpleItem {
  icon: string;
  label: string;
}

export interface ObjectiveSupportArea {
  title: string;
  items: string[];
}

export interface ObjectiveLearningFeature {
  icon: string;
  description: string;
}

export interface ObjectiveImage {
  asset: {
    url: string;
  };
  alt: string;
}

export interface Objective {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  tabName: string;
  description: string;
  order: number;
  contentType:
    | "simple-list"
    | "strategies"
    | "support-areas"
    | "learning-features";
  image?: ObjectiveImage;
  imagePosition: "right" | "left" | "hidden-mobile";
  simpleItems?: ObjectiveSimpleItem[];
  strategiesTitle?: string;
  strategies?: string[];
  supportAreas?: ObjectiveSupportArea[];
  learningFeatures?: ObjectiveLearningFeature[];
}

export interface ObjectivesSettings {
  sectionTitle?: string;
  sectionSubtitle?: string;
  defaultTab?: {
    slug: {
      current: string;
    };
  };
}
