// schemas/homePage.ts
import { defineType, defineField } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "translationId",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Swahili", value: "sw" },
          { title: "Arabic", value: "ar" },
          { title: "Persian", value: "fa" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    // Hero Section
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "slides",
          title: "Slides",
          type: "array",
          of: [
            {
              type: "object",
              title: "Slide",
              fields: [
                defineField({
                  name: "image",
                  title: "Slide Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: "heading",
                  title: "Small Heading",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "title",
                  title: "Main Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 3,
                }),
                defineField({
                  name: "ctaText",
                  title: "CTA Button Text",
                  type: "string",
                }),
                defineField({
                  name: "ctaLink",
                  title: "CTA Link URL",
                  type: "string",
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // About Us
    defineField({
      name: "aboutUs",
      title: "About Us Section",
      type: "object",
      fields: [
        defineField({
          name: "tagline",
          title: "Small Heading / Tagline",
          type: "string",
          description: "E.g., “About Us” shown in uppercase highlighted style",
        }),
        defineField({
          name: "title",
          title: "Main Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "intro",
          title: "Intro Paragraph - Part 1",
          type: "text",
        }),
        defineField({
          name: "intromid",
          title: "Intro Emphasized Phrase",
          type: "string",
          description: "Text styled in bold in the middle of the paragraph.",
        }),
        defineField({
          name: "intro2",
          title: "Intro Paragraph - Part 2",
          type: "text",
        }),
        defineField({
          name: "linkText",
          title: "CTA Link Text",
          type: "string",
          description: "E.g., “Learn More”, “See More About Us”, etc.",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Core Values
    defineField({
      name: "coreValues",
      title: "Core Values Section",
      type: "object",
      fields: [
        // Core Values Block
        defineField({
          name: "valuesHeading",
          title: "Core Values Heading",
          type: "string",
          description: 'E.g., "Our Core Values"',
        }),
        defineField({
          name: "valuesTitle",
          title: "Core Values Title",
          type: "string",
          description: "Bold title shown below the heading",
        }),
        defineField({
          name: "valuesDescription",
          title: "Core Values Description",
          type: "text",
        }),
        defineField({
          name: "principles",
          title: "Core Principles List",
          type: "array",
          of: [{ type: "string" }],
          description: "E.g., Integrity, Compassion, Accountability...",
        }),

        // Mission Section
        defineField({
          name: "MissionandVisionSection",
          title: "Mission & Vision Section Title",
          type: "string",
          description: 'E.g., "Our Mission & Vision"',
        }),
        defineField({
          name: "missionTitle",
          title: "Mission Title",
          type: "string",
          description: 'E.g., "Our Mission"',
        }),
        defineField({
          name: "missionDescription",
          title: "Mission Description",
          type: "text",
        }),

        // Vision
        defineField({
          name: "visionTitle",
          title: "Vision Title",
          type: "string",
          description: 'E.g., "Our Vision"',
        }),
        defineField({
          name: "visionDescription",
          title: "Vision Description",
          type: "text",
        }),
      ],
    }),

    // Objectives
    defineField({
      name: "objectives",
      title: "Objectives Section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Small Heading",
          type: "string",
          description: 'E.g., "Our Objectives"',
        }),
        defineField({
          name: "title",
          title: "Main Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Intro Description",
          type: "text",
        }),
        defineField({
          name: "objectives",
          title: "Objectives List",
          type: "array",
          of: [
            {
              type: "object",
              title: "Objective",
              fields: [
                defineField({
                  name: "title",
                  title: "Objective Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Objective Description",
                  type: "text",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "ctaText",
          title: "CTA Link Text",
          type: "string",
          description: 'E.g., "See All Objectives"',
        }),
        // defineField({
        //   name: "ctaLink",
        //   title: "CTA Link URL",
        //   type: "url",
        // }),
      ],
    }),

    // Project
    defineField({
      name: "projects",
      title: "Projects / Programs Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section Title",
          type: "string",
          description: "E.g., “Our Programs” or “Ongoing Projects”",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
        }),

        defineField({
          name: "items",
          title: "Project / Program Items",
          type: "array",
          of: [
            {
              type: "object",
              title: "Project Item",
              fields: [
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                }),
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                }),
                defineField({
                  name: "href",
                  title: "Link URL",
                  type: "string",
                }),
              ],
            },
          ],
        }),

        defineField({
          name: "buttonText",
          title: "Item Button Text",
          type: "string",
          description: 'E.g., "Learn More"',
        }),

        defineField({
          name: "linkText",
          title: "Bottom CTA Link Text",
          type: "string",
          description: 'E.g., "See All Programs"',
        }),
        defineField({
          name: "ctaLink",
          title: "Bottom CTA Link URL",
          type: "string",
        }),
      ],
    }),

    // Financial Support
    defineField({
      name: "financialSupport",
      title: "Financial Support Section",
      type: "object",
      fields: [
        // General Introduction
        defineField({
          name: "title",
          title: "Section Title",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Section Subtitle",
          type: "string",
        }),
        defineField({
          name: "intro",
          title: "Section Intro Text",
          type: "text",
        }),

        // Qardh Hassanah
        defineField({
          name: "qardh",
          title: "Qardh Hassanah Section",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "summary", title: "Summary", type: "text" }),
            defineField({
              name: "governanceTitle",
              title: "Governance Title",
              type: "string",
            }),
            defineField({
              name: "governance",
              title: "Governance Content",
              type: "text",
            }),
            defineField({
              name: "eligibilityTitle",
              title: "Eligibility Title",
              type: "string",
            }),
            defineField({
              name: "eligibility",
              title: "Eligibility Content",
              type: "text",
            }),
            defineField({
              name: "fundingTitle",
              title: "Funding Title",
              type: "string",
            }),
            defineField({
              name: "funding",
              title: "Funding Content",
              type: "text",
            }),
            defineField({
              name: "objectivesTitle",
              title: "Objectives Title",
              type: "string",
            }),
            defineField({
              name: "objectives",
              title: "Objectives List",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "benefitsTitle",
              title: "Benefits Title",
              type: "string",
            }),
            defineField({
              name: "benefits",
              title: "Benefits List",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "ctaText",
              title: "CTA Link Text",
              type: "string",
            }),
            defineField({
              name: "ctaLink",
              title: "CTA Link URL",
              type: "url",
            }),
          ],
        }),

        // AESP Section
        defineField({
          name: "aesp",
          title: "AESP Section",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "intro", title: "Intro", type: "text" }),
            defineField({
              name: "requirementsTitle",
              title: "Requirements Section Title",
              type: "string",
            }),
            defineField({
              name: "requirementsGroupOne",
              title: "Requirements Group One",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "requirementsGroupTwo",
              title: "Requirements Group Two",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "disclaimer",
              title: "Disclaimer",
              type: "text",
            }),
            defineField({
              name: "ctaText",
              title: "CTA Link Text",
              type: "string",
            }),
            defineField({
              name: "ctaLink",
              title: "CTA Link URL",
              type: "url",
            }),
          ],
        }),
      ],
    }),

    // Community Initiatives (Events)
    defineField({
      name: "communityInitiatives",
      title: "Community Initiatives / Events Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section Title",
          type: "string",
          description: 'E.g., "Join Our Community Initiatives"',
        }),
        defineField({
          name: "description",
          title: "Intro Text",
          type: "text",
          description: "Short paragraph to encourage users to explore events.",
        }),
        defineField({
          name: "events",
          title: "Events",
          type: "array",
          of: [
            {
              type: "object",
              title: "Event",
              fields: [
                defineField({
                  name: "title",
                  title: "Event Title",
                  type: "string",
                }),
                defineField({
                  name: "date",
                  title: "Event Date",
                  type: "date",
                  options: {
                    dateFormat: "YYYY-MM-DD",
                  },
                }),
                defineField({
                  name: "location",
                  title: "Event Location",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Event Description",
                  type: "text",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "linkText",
          title: "CTA Link Text",
          type: "string",
          description: 'E.g., "See All Events"',
        }),
        defineField({
          name: "ctaLink",
          title: "CTA Link URL",
          type: "url",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "headline",
      subtitle: "lang",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || `Home Page`,
        subtitle: subtitle?.toUpperCase(),
      };
    },
  },
});
