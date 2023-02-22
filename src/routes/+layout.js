/** @type {import('./$types').LayoutServerLoad} */
import { error } from "@sveltejs/kit";
import client from "$lib/sanity";

let query = `*[_type == 'siteconfig'][0]
{
 title,
 subtitle,
 introduce
} `;

export const load = async () => {
  const siteconfig = await client.fetch(query);

  if (!siteconfig) throw error();
  return {
    siteconfig,
  };
};
