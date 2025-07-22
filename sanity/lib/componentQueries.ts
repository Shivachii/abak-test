export const NAVBAR_QUERY = `
  *[_type == "navbar" && lang == $lang][0]{
    navLinks,
    ctaButtons,
    siteSettings->{
      socialLinks,
      contactInfo
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
  quickLinks,
  siteSettings->{
    socialLinks,
      contactInfo
  }
}
`;
