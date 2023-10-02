import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { sanityClient } from "sanity:client";
const client = sanityClient
const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}
