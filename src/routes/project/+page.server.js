import { error } from "@sveltejs/kit";
import client from "$lib/sanity";

let query = `*[_type == 'project']
{
  image,
  title,
  slug,
  desc
} `;

export const load = async () => {
  const project = await client.fetch(query);

  if (!project) throw error();
  return {
    project,
  };
};
