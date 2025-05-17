export const galleryQueryBySlug = `
  *[_type == "gallery" && slug.current == $slug][0]{
    _id,
    title,
    description,
    "mediaItems": media[]{
      _key,
      _type,
      ...select(
        _type == "image" => {
          "url": asset->url,
          "assetId": asset->_ref,
          "type": "image"
        },
        _type == "file" => {
          "url": asset->url,
          "assetId": asset->_ref,
          "type": "file",
          caption
        }
      )
    },
  }
`;

export const galleryQuery = `*[_type == "gallery"]{
    _id,
    title,
    description,
    slug,
    "mediaItems": media[]{
      _key,
      _type,
      ...select(
        _type == "image" => {
          "url": asset->url,
          "assetId": asset->_ref,
          "type": "image"
        },
        _type == "file" => {
          "url": asset->url,
          "assetId": asset->_ref,
          "type": "file",
          caption
        }
      )
    },
    "tags": tag[]->{
      _id,
      title,
      slug
    }
  }`;

export const allGalleriesQuery = `
  *[_type == "gallery"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    "previewImage": previewImage.asset->url
  }
`;

export const publicationsQuery = `
*[_type == "publications"] | order(_createdAt desc) {
  _id,
  title,
  description,
  slug,
  "pdfUrl": pdfFile.asset->url
}
`;
