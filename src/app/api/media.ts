import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = 8;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const query = `
    *[_type == "gallery"]{
      title,
      slug,
      media[]{
        ...,
        "type": _type,
        "url": select(
          _type == "image" => asset->url,
          _type == "file" => asset->url
        ),
        "extension": select(_type == "file" => asset->extension),
        caption,
        "galleryTitle": ^.title,
        "gallerySlug": ^.slug.current
      }
    }.media[] | order(_createdAt desc) [${start}...${end}]
  `;

  const media = await client.fetch(query);
  return NextResponse.json(media);
}
