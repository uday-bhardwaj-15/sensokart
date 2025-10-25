// import { createClient } from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";
// const token = process.env.SANITY_API_TOKEN;

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false,
//   token,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source: any) => builder.image(source);

// lib/mainclient.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||"";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET||"production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";
const token = process.env.SANITY_API_TOKEN||"";


console.log("Sanity ENV:", {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  hasToken: !!process.env.SANITY_API_TOKEN,
});
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // Do NOT include a write token in a client that will run on the browser.
  // If SANITY_API_TOKEN is present, keep it undefined so this remains read-only.
  token: undefined,
});

// Server write client (must only be used server-side - put token in env variable SANITY_WRITE_TOKEN)
export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token || process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
