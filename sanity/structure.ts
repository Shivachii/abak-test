import type { StructureResolver } from "sanity/structure";
import { client } from "../sanity/lib/client";
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = async (S) => {
  const parentItems = await client.fetch(
    `*[_type == "parentEvent"]{_id, title}`
  );

  return S.list()
    .title("ABAKCMS")
    .items([
      S.documentTypeListItem("siteSettings").title("Site settings"),
      S.documentTypeListItem("localizedLink").title("Translated Links"),
      S.documentTypeListItem("navigationGroup").title("Navigation Groups"),
      S.documentTypeListItem("navLink").title("Nav Links"),
      S.divider(),
      S.documentTypeListItem("navbar").title("Navbar"),
      S.documentTypeListItem("sidebar").title("Sidebar"),
      S.documentTypeListItem("footer").title("Footer"),
      S.divider(),

      S.documentTypeListItem("formBuilder").title("Form Builder"),
      // S.documentTypeListItem("objectivesSection").title("Objectives Section"),

      S.divider(),

      S.documentTypeListItem("publications").title("Publications"),
      S.documentTypeListItem("gallery").title("Gallery"),
      S.documentTypeListItem("youtubevideoGallery").title(
        "Youtube Video Gallery"
      ),
      S.documentTypeListItem("audio").title("Audio"),
      S.documentTypeListItem("parentEvent").title("Event Groups"),

      S.listItem()
        .title("Events")
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
      S.documentTypeListItem("homePage").title("Home Page"),
      S.documentTypeListItem("aboutPage").title("About Page"),
      S.documentTypeListItem("eventsPage").title("Events Page"),
      S.documentTypeListItem("communityServicesPage").title(
        "Community Services Page"
      ),
      S.documentTypeListItem("contactPage").title("Contact Page"),
      S.documentTypeListItem("hawzaPage").title("Hawza Page"),
      S.documentTypeListItem("mubaligheenSupportPage").title(
        "Mubaligheen Support Page"
      ),
      S.documentTypeListItem("mubaligheenTrainingPage").title(
        "Mubaligheen Training Page"
      ),
      S.documentTypeListItem("projectsPage").title("Projects Page"),
      S.documentTypeListItem("qardhPage").title("Qardh Hassanah Page"),
      S.documentTypeListItem("volunteerPage").title("Volunteer Page"),
      S.documentTypeListItem("donatePage").title("Donate Page"),
    ]);
};
