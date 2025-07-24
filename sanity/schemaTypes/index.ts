import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { galleryType } from "./media/galleryType";
// import { mediaType } from "./mediaType";
import { publicationsType } from "./media/publicationsType";
import { audioType } from "./media/audioType";
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
import { eventType } from "./media/eventsType";
import { parentEvent } from "./media/parentEventType";
import { navbarType } from "./components/navbarType";
import { sidebarType } from "./components/sidebarType";
import { footerType } from "./components/footerType";
import { siteSettingsType } from "./singletons/siteSettings";
import { youtubevideoGallery } from "./media/youtubeLinksType";
import { formBuilder } from "./forms/formBuilderType";
import { eventsPageType } from "./pages/eventsPage";
import { objectiveItem } from "./objectiveItem";
import { objectivesSection } from "./objectivesSection";
import { navigationGroup } from "./components/navigationGroup";
import { i18nText } from "./singletons/i18nText";
import { localizedLink } from "./singletons/localizedLinks";
import { navLinkType } from "./singletons/navLink";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,

    // Common settings & singletons
    siteSettingsType,
    localizedLink,
    navigationGroup,
    navLinkType,
    i18nText,

    // Components
    navbarType,
    sidebarType,
    footerType,
    formBuilder,

    // Uploads/Media
    objectivesSection,
    objectiveItem,
    galleryType,
    youtubevideoGallery,
    publicationsType,
    audioType,
    parentEvent,
    eventType,

    // Page Types
    homePageType,
    aboutPageType,
    contactPageType,
    eventsPageType,
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
