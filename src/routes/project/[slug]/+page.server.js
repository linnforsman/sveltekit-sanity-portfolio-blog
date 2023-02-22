import client from "$lib/sanity";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const data =
    await client.fetch(`*[_type == "project" && slug.current =='${params.slug}'][0]
  {
    title,
    image,
    slug,
    desc,
    type,
    role
  }
`);
  return {
    project: data,
    slug: params.slug,
  };
}
