import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "6xkhldev",
  dataset: "production",
  apiVersion: "2023-01-16",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};

export default client;