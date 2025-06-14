import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { tagType } from "./tagType";
import { galleryType } from "./galleryType";
import { mediaType } from "./mediaType";
import { publicationsType } from "./publicationsType";
import { audioType } from "./audioType";
import { imagesType } from "./imagesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    tagType,
    galleryType,
    mediaType,
    publicationsType,
    audioType,
    imagesType,
  ],
};
