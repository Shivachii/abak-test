export const NAVBAR_QUERY = `
  *[_type == "navbar" && lang == $lang][0]{
    navLinks[] {
      link-> {
 
        label,
        description,
        linkType,
        internalLink->{
          "key": key.current,
          href
        },
        externalUrl
      },
      children[]-> {
        label,
        description,
             linkType,
        internalLink->{
          "key": key.current,
          href
        },
        externalUrl
      }
    },
    ctaButtons[] {
      link-> {
        label,
             linkType,
        internalLink->{
          "key": key.current,
          href
        },
        externalUrl
      },
      style
    },
    siteSettings-> {
      socialLinks[] {
        platform,
        url
      },
      contactInfo {
        email,
        phone
      }
    }
  }
`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  contactInfo,
  socialLinks
}`;

export const FOOTER_QUERY = `
*[_type == "footer" && lang == $lang][0]{
  description,
  footerLinks[] {
    link-> { 
      label,
      linkType,
      internalLink->{
        "key": key.current,
        href
      },
      externalUrl,
      
    }
  },
  siteSettings->{
    socialLinks,
    contactInfo
  }
}
`;

export const SIDEBAR_QUERY = `
*[_type == "sidebar" && lang == $lang][0]{
sidebarLinks[] {
      link-> { 
        label,
        description,
        linkType,
        internalLink->{
          "key": key.current,
          href
        },
        externalUrl
      },
      children[]-> {
        label,
        description,
        internalLink->{
          "key": key.current,
          href
        },
        externalUrl
      }
    },
 
  siteSettings->{
    socialLinks,
    contactInfo
  }
}
`;
