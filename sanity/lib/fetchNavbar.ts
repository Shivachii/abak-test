import { client } from "./client";
import { NAVBAR_QUERY, FOOTER_QUERY } from "./componentQueries";
import { sanityFetch } from "./live";

export async function fetchNavbar(lang: string) {
  const navData = await client.fetch(NAVBAR_QUERY, { lang });
  return navData;
}

export async function getFooterData(locale: string) {
  const { data } = await sanityFetch({
    query: FOOTER_QUERY,
    params: { lang: locale },
  });
  return data;
}
