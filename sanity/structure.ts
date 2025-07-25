import type { StructureResolver } from "sanity/structure";
import { client } from "../sanity/lib/client";
// https://www.sanity.io/docs/structure-builder-cheat-sheet
// adjust path if needed
import { ImagesIcon, ListIcon, DocumentIcon } from "@sanity/icons";
import { Globe2Icon, Settings } from "lucide-react";

export const structure: StructureResolver = async (S) => {
  const parentItems = await client.fetch(
    `*[_type == "parentEvent"]{_id, title}`
  );

  return S.list()
    .title("ABAKCMS")
    .items([
      // 🛠 Settings
      S.listItem()
        .title("Site Settings")
        .icon(Settings)
        .child(
          S.list()
            .title("Site Settings")
            .items([
              S.documentTypeListItem("siteSettings").title("Contact Info"),
              S.documentTypeListItem("bankInfo").title("Bank Information"),
            ])
        ),

      // 🌐 Navigation
      S.listItem()
        .title("Navigation")
        .icon(Globe2Icon)
        .child(
          S.list()
            .title("Navigation")
            .items([
              S.documentTypeListItem("navbar").title("Navbar"),
              S.documentTypeListItem("sidebar").title("Sidebar"),
              S.documentTypeListItem("footer").title("Footer"),
              S.documentTypeListItem("navigationGroup").title(
                "Navigation Groups"
              ),
              S.documentTypeListItem("navLink").title("Nav Links"),
              S.documentTypeListItem("localizedLink").title("Translated Links"),
            ])
        ),

      // 🖼 Media Section
      S.listItem()
        .title("Media")
        .icon(ImagesIcon)
        .child(
          S.list()
            .title("Media Content")
            .items([
              S.documentTypeListItem("gallery").title("Image Gallery"),
              S.documentTypeListItem("youtubevideoGallery").title(
                "YouTube Gallery"
              ),
              S.documentTypeListItem("audio").title("Audio Collection"),
            ])
        ),

      // 🧾 Forms
      S.documentTypeListItem("formBuilder").title("Form Builder"),

      S.divider(),

      // 📆 Events
      S.documentTypeListItem("parentEvent").title("Event Groups"),
      S.listItem()
        .title("Events")
        .icon(ListIcon)
        .child(
          S.list()
            .title("Events by Group")
            .items(
              parentItems.map((group: any) =>
                S.listItem()
                  .title(group.title)
                  .child(
                    S.documentList()
                      .title("Translations")
                      .filter('_type == "event" && parent._ref == $id')
                      .params({ id: group._id })
                  )
              )
            )
        ),

      S.divider(),
      S.documentTypeListItem("objective").title("Objectives"),
      S.documentTypeListItem("objectivesSettings").title("Objectives"),
      S.divider(),

      // 📄 Pages
      S.listItem()
        .title("Pages")
        .icon(DocumentIcon)
        .child(
          S.list()
            .title("Website Pages")
            .items([
              S.documentTypeListItem("homePage").title("Home Page"),
              S.documentTypeListItem("aboutPage").title("About Page"),
              S.documentTypeListItem("contactPage").title("Contact Page"),
              S.documentTypeListItem("eventsPage").title("Events Page"),
              S.documentTypeListItem("communityServicesPage").title(
                "Community Services"
              ),
              S.documentTypeListItem("hawzaPage").title("Hawza Page"),
              S.documentTypeListItem("mubaligheenSupportPage").title(
                "Mubaligheen Support"
              ),
              S.documentTypeListItem("mubaligheenTrainingPage").title(
                "Mubaligheen Training"
              ),
              S.documentTypeListItem("projectsPage").title("Projects Page"),
              S.documentTypeListItem("qardhPage").title("Qardh Hassanah"),
              S.documentTypeListItem("volunteerPage").title("Volunteer Page"),
              S.documentTypeListItem("donatePage").title("Donate Page"),
              S.documentTypeListItem("audiovisualPage").title(
                "Audio Visual Page"
              ),
              S.documentTypeListItem("imagesPage").title("Images Gallery Page"),
              S.documentTypeListItem("audioPage").title("Audio Gallery Page"),
              S.documentTypeListItem("videoPage").title("Video Gallery Page"),
            ])
        ),
    ]);
};
