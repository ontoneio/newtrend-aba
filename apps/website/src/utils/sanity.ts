import groq from 'groq';
import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";

const client = sanityClient

export async function getHome(): Promise<Home> {
  return await client.fetch(
    groq`*[_type == "homepage"][0]{
      _type,
      _createdAt,
      title,
      headline,
      "hero": heroImage,
      "imageProfile":smallProfile.profileImage,
      "nameCaption": smallProfile.nameCaption,
      "titleCaption": smallProfile.titleCaption,
      content,
      email,
      phone,
      soundcloudLink
    }`
  );
}
export async function getHero(): Promise<Hero> {
  return await client.fetch(
    groq`*[_type == "homepage"][0]{
      "hero": heroImage.asset->url,
    }`
  );
}

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export interface Hero {
  hero?: string; 
}

export interface Home {
  _type: "homepage";
  _createdAt: string;
  title?: string;
  headline?: string;
  hero?: string;
  imageProfile?: string;
  nameCaption?: string;
  titleCaption?: string;
  content?: Array<Object>;
  email: string;
  phone: string;
  soundcloudLink: string; 
}

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}
