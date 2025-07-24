import { createClient } from "@sanity/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-05-11",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

async function migrateNavLinks() {
  const navLinks = await client.fetch(`*[_type == "navLink"]{
    _id,
    _rev,
    key,
    href
  }`);

  console.log(`Found ${navLinks.length} navLink documents.`);

  const mutations = navLinks.map((navLink) => ({
    create: {
      _type: "localizedLink",
      key: navLink.key, // Optional, remove if not used
      href: navLink.href,
      label: {
        en: navLink.key?.current?.replace("-", " ") || "", // Basic label guess
      },
      locale: "en", // Set default language (adjust if you know the correct one)
    },
  }));

  if (mutations.length > 0) {
    const result = await client.transaction().mutations(mutations).commit();
    console.log(`✅ Migrated ${mutations.length} links to 'localizedLink'`);
  } else {
    console.log("No navLinks found to migrate.");
  }
}

migrateNavLinks().catch((err) => {
  console.error("Migration failed:", err.message);
  process.exit(1);
});
