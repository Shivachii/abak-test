import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { tagType } from "./tagType";
import { galleryType } from "./galleryType";
import { mediaType } from "./mediaType";
import { publicationsType } from "./publicationsType";
import { audioType } from "./audioType";
import { imagesType } from "./imagesType";
import { aboutPageType } from "./pages/aboutPage";
import { contactPageType } from "./pages/contactPage";
import { communityServicesPageType } from "./pages/communityServicesPage";
import { donatePageType } from "./pages/donatePage";
import { mubaligheenSupportPageType } from "./pages/mubaligheenSupportPage";
import { mubaligheenTrainingPageType } from "./pages/mubaligheenTrainingPage";
import { projectsPageType } from "./pages/projectsPage";
import { qardhPageType } from "./pages/qardhPage";
import { volunteerPageType } from "./pages/volunteerPage";
import { hawzaPage } from "./pages/hawzaPage";
import { homePageType } from "./pages/homePage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    tagType,
    galleryType,
    mediaType,
    publicationsType,
    audioType,
    imagesType,
    // Page Types
    homePageType,
    aboutPageType,
    contactPageType,
    communityServicesPageType,
    donatePageType,
    mubaligheenSupportPageType,
    mubaligheenTrainingPageType,
    projectsPageType,
    qardhPageType,
    volunteerPageType,
    hawzaPage,
  ],
};
