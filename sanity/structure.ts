import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("ABAKCMS")
    .items([
      S.documentTypeListItem("gallery").title("Gallery"),
      S.documentTypeListItem("media").title("Media"),
      S.documentTypeListItem("tag").title("Tag"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["gallery", "media", "tag"].includes(item.getId()!)
      ),
    ]);
