<script>
  import SanityImage from "$lib/components/SanityImage.svelte";
  import Card from "$lib/components/Card.svelte";
  import PostCard from "$lib/components/PostCard.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1 style="text-align:center; font-size:48px">Blog</h1>
<section>
  {#if data.blog && data.blog.length}
    <Card>
      {#each data.blog as post}
        <a rel="prefetch" href="/blog/{post.slug.current}">
          <PostCard>
            <div slot="image">
              {#if post.image}
                <SanityImage
                  image={post.image}
                  maxWidth={550}
                  alt="Preview post image."
                />
              {/if}
            </div>
            <small slot="date">
              Published {new Date(post.publishdate).toLocaleDateString("en", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </small>
            <h1 slot="header">{post.title}</h1>
            <span slot="desc">{post.desc}</span>
          </PostCard>
        </a>
      {/each}
    </Card>
  {:else}
    <p>No posts found.</p>
  {/if}
</section>

<style>
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
  section {
    padding-left: 7rem;
    padding-right: 7rem;
  }
</style>
