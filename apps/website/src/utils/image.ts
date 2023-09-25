import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { useSanityClient } from "@sanity/astro";

const client = useSanityClient()
const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}
