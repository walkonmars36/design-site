import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: "azfpwdmk",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01"
});

export { sanityClient as s };
