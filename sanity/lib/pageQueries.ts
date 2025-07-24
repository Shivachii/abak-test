export const homePageQuery = `
  *[_type == "homePage" && lang == $lang][0]{
    hero {
      slides[] {
        image,
        heading,
        title,
        description,
        ctaText,
        ctaLink
      }
    },
    aboutUs {
      tagline,
      title,
      intro,
      intromid,
      intro2,
      linkText,
      image
    },
    coreValues {
      valuesHeading,
      valuesTitle,
      valuesDescription,
      principles,
      MissionandVisionSection,
      missionTitle,
      missionDescription,
      visionTitle,
      visionDescription
    },
    objectives {
      heading,
      title,
      description,
      ctaText,
      objectives[] {
        title,
        description
      }
    },
    projects {
      title,
      subtitle,
      description,
      buttonText,
      linkText,
      ctaLink,
      items[] {
        title,
        description,
        href,
        image
      }
    },
    financialSupport {
      title,
      subtitle,
      intro,
      qardh {
        title,
        summary,
        governanceTitle,
        governance,
        eligibilityTitle,
        eligibility,
        fundingTitle,
        funding,
        objectivesTitle,
        objectives,
        benefitsTitle,
        benefits,
        ctaText,
        ctaLink
      },
      aesp {
        title,
        intro,
        requirementsTitle,
        requirementsGroupOne,
        requirementsGroupTwo,
        disclaimer,
        ctaText,
        ctaLink
      }
    },
    communityInitiatives {
      title,
      description,
      linkText,
      ctaLink,
      events[] {
        title,
        date,
        location,
        description
      }
    }
  }
`;

export const ABOUT_PAGE_QUERY = `
  *[_type == "aboutPage" && lang == $lang][0]{
    name,
    who,
    description,
    missionTitle,
    mission,
    visionTitle,
    vision
  }
`;
export const CONTACT_PAGE_QUERY = `
  *[_type == "contactPage" && lang == $lang][0] {
    headline,
    intro,
    infoTitle,
    infoNote,
    addressTitle,
    address,
    emailTitle,
    emails,
    phoneTitle,
    phones
  }
`;

export const COMMUNITY_SERVICES_QUERY = `
  *[_type == "communityServicesPage" && lang == $lang][0] {
    title,
    subtitle,
    groups[]{
      "imageUrl": image.asset->url,
      items[]{
        title,
        description
      }
    }
  }
`;

export const DONATE_PAGE_QUERY = `
  *[_type == "donatePage" && lang == $lang][0] {
    title,
    description,
    waysTitle,
    methods,
    bankInfo {
      bank,
      branch,
      accountName,
      accounts[] {
        label,
        number
      }
    }
  }
`;

export const QARDH_PAGE_QUERY = `
  *[_type == "qardhPage" && lang == $lang][0] {
    title,
    subtitle,
    summaryTitle,
    summary,
    objectivesTitle,
    objectives,
    benefitsTitle,
    benefits,
    governanceTitle,
    governance,
    eligibilityTitle,
    eligibility,
    loanProcessTitle,
    loanProcessSteps,
    challengesTitle,
    challenges,
    futureTitle,
    future,
    applyTitle
  }
`;

export const VOLUNTEER_PAGE_QUERY = `
  *[_type == "volunteerPage" && lang == $lang][0] {
    title,
    subtitle,
    opportunityTitle,
    opportunities
  }
`;

export const PROJECTS_PAGE_QUERY = `
  *[_type == "projectsPage" && lang == $lang][0] {
    title,
    description,
    buttonText,
    projects[] {
      title,
      description,
      href,
      "imageUrl": image.asset->url
    }
  }
`;

export const MUBALIGHEEN_TRAINING_QUERY = `
  *[_type == "mubaligheenTrainingPage" && lang == $lang][0] {
    title,
    intro,
    whyImportant,
    description,
    trainingAreas,
    symposiumTitle,
    symposiumBody,
    cta,
    "image1": image1.asset->url,
    "image2": image2.asset->url
  }
`;

export const MUBALIGHEEN_SUPPORT_QUERY = `
  *[_type == "mubaligheenSupportPage" && lang == $lang][0] {
    title,
    intro,
    whySupport,
    description,
    supportAreas,
    cta,
    "imageUrl": image.asset->url
  }
`;

export const HAWZA_PAGE_QUERY = `
  *[_type == "hawzaPage" && lang == $lang][0]{
    title,
    subtitle,
    about {
      title,
      subtitle,
      description
    },
    establishment {
      title,
      vision { title, description },
      mission { title, description },
      impact { title, description }
    },
    admissionsSection {
      title,
      admissions[] {
        title,
        description
      }
    },
    studentsSection {
      title,
      students[] {
        title,
        description
      }
    },
    curriculumSection {
      title,
      curriculum[] {
        title,
        description
      }
    },
    Facilities {
      title,
      facilities[] {
        title,
        description
      }
    },
    scholarshipSection {
      heading,
      intro,
      details,
      impact,
      types[] {
        icon,
        title,
        description
      },
      image {
        asset->{
          url
        }
      }
    },
    support {
      title,
      description,
      bank_details[] {
        label,
        value
      }
    }
  }
`;

export const EVENTS_PAGE_QUERY = `*[_type == "eventsPage" && lang == $lang][0]{
title, 
subtitle}`;
