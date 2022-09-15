import {
  createImageUrlBuilder,
  createClient,
  createCurrentUserHook,
} from "next-sanity";

const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-09-09",
  useCdn: process.env.NODE_ENV === "production",
};

// Setup the client for fetching data in getProps page functions
const sanityClient = createClient(sanityConfig);

const urlFor = (source) => createImageUrlBuilder(sanityConfig).image(source);

const useCurrentUser = createCurrentUserHook(sanityConfig);

export { sanityClient, urlFor, useCurrentUser, sanityConfig };
