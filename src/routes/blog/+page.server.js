import { error } from "@sveltejs/kit";
import client from "$lib/sanity";

let query = `*[_type == 'blog']
{
  image,
  title,
  slug,
  publishdate,
  desc,
}  | order(select(defined(publishdate) => 1,  0) asc, publishdate desc)`;

export const load = async () => {
  const blog = await client.fetch(query);

  if (!blog) throw error();
  return {
    blog,
  };
};
