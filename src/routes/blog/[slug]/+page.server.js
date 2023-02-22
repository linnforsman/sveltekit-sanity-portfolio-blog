import client from "$lib/sanity";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const data =
    await client.fetch(`*[_type == "blog" && slug.current =='${params.slug}'][0]
  {
    title,
    image,
    publishdate,
    slug,
    body
  }
`);
  return {
    blog: data,
    slug: params.slug,
  };
}
