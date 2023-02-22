<script>
  import { PortableText } from "@portabletext/svelte";
  import Link from "$lib/components/Link.svelte";
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import SanityImage from "$lib/components/SanityImage.svelte";
  export let data;
</script>

<svelte:head>
  <title>Blog / {data.blog.title}</title>
</svelte:head>

<article>
  <header>
    {#if data.blog.image}
      <SanityImage image={data.blog.image} maxWidth={550} />
    {/if}
  </header>
  <small>
    PUBLISHED {new Date(data.blog.publishdate).toLocaleDateString("en", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    })}
  </small>
  <h1>{data.blog.title}</h1>

  <PortableText
    value={data.blog.body}
    components={{
      types: {
        image: ImageBlock,
      },
      marks: {
        link: Link,
      },
    }}
  />
</article>

<style>
  article {
    padding-top: 3%;
    max-width: 70ch;
    margin: 0 auto 0 auto;
  }
</style>
