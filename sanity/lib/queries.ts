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

export const getAllAudioQuery = `*[_type == "audio"]{
  _id,
  title,
  author,
  "audioUrl": audioFile.asset->url,
  "thumbnailUrl": thumbnail.asset->url
}`;

export const getImagesQuery = `
*[_type == "images"] | order(_createdAt desc) {
  _id,
  title,
  description,
  "imageUrl": image.asset->url
}
`;

export const getAllGalleryMediaPaginatedQuery = (start = 0, end = 8) => `
  *[_type == "gallery"] | order(_createdAt desc) [${start}...${end}]{
    title,
    slug,
    "media": media[]{
      ...,
      _type == "image" => {
        "type": "image",
        "url": asset->url,
        caption
      },
      _type == "file" => {
        "type": "file",
        "url": asset->url,
        caption,
        "extension": asset->extension
      }
    }
  }
`;

export const EVENTS_QUERY = `
*[_type == "event" && lang == $lang && defined(slug.current)]{
  _id,
  title,
  "slug": slug.current,
  date,
  location,
  description,
  "images": bannerImage.asset->url,
  lang,
  parent->{title, slug}
} | order(date desc)
`;

export const EVENT_QUERY = `
*[_type == "event" && slug.current == $slug][0]{
title,
date,
location,
description, 
"bannerImage": bannerImage.asset->url,
"gallery": gallery->{
  title,
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
  }
}
}
`;

export const RECENT_EVENTS_QUERY = `*[_type == "event" && lang == $lang] | order(date desc)  [0...3] {
  _id,
  title,
  date,
  slug,
  "bannerImage": bannerImage.asset->url,
  location,
  description
}`;

export const allSlugs = `*[_type == "event" && slug.current == $slug][0]{
      title
    }`;

export const EVENTS_SLUGS_QUERY = `*[_type == "event" && defined(slug.current)][]{
      "slug": slug.current
    }`;

export const YOUTUBE_LINKS_QUERY = `
*[_type == "youtubevideoGallery"][0] {
  videos[] {
    title,
    url
  }
}
`;

export const objectivesQuery = `
  *[_type == "objective"] | order(order asc) {
    _id,
    title,
    slug,
    tabName,
    description,
    order,
    contentType,
    image {
      asset-> {
        url
      },
      alt
    },
    imagePosition,
    simpleItems[] {
      icon,
      label
    },
    strategiesTitle,
    strategies,
    supportAreas[] {
      title,
      items
    },
    learningFeatures[] {
      icon,
      description
    }
  }
`;
export const objectivesSettingsQuery = `
  *[_type == "objectivesSettings"][0] {
    sectionTitle,
    sectionSubtitle,
    defaultTab-> {
      slug
    }
  }
`;

export const getFormBySlugQuery = `
  *[_type == "downloadableForm" && slug.current == $slug][0]{
    title,
    description,
    file {
      asset->{
        url,
        originalFilename
      }
    },
    previewImage
  }
`;

export const formBySlugQuery = `
  *[_type == "formBuilder" && slug.current == $slug][0] {
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    tagline,
    description,
    layout,
    category,
    successMessage,
    groupIntoSections,
    slug,

    groupIntoSections == true => {
      sections[]{
        title,
        description,
        fields[]->{
          _id,
          label,
          name,
          inputType,
          placeholder,
          required,
          description,
          options,
          multiple,
          maxFiles,
          acceptedFileTypes,
          
          conditionalLogic{
            enabled,
            conditions[]{
              fieldName,
              operator,
              value
            }
          },
          
          validation{
            minLength,
            maxLength,
            customMessage
          },
          
          layout{
            width
          },
          
          personDetails{
            includeFields
          },
          
          addressConfig{
            includeFields
          },
          
          currencyConfig{
            currency,
            showSymbol
          }
        }
      }
    },

    groupIntoSections != true => {
      fields[]->{
        _id,
        label,
        name,
        inputType,
        placeholder,
        required,
        description,
        options,
        multiple,
        maxFiles,
        acceptedFileTypes,
        
        conditionalLogic{
          enabled,
          conditions[]{
            fieldName,
            operator,
            value
          }
        },
        
        validation{
          minLength,
          maxLength,
          customMessage
        },
        
        layout{
          width
        },

        personDetails{
          includeFields
        },  

        addressConfig{
          includeFields
        },
                
        currencyConfig{
          currency,
          showSymbol
        }
      }
    },
    requiredDocuments[]->{
      _id,
      name,
      required,
      description
    }
  }
`;
