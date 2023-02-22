<script>
  import SanityImage from "$lib/components/SanityImage.svelte";
  import Card from "$lib/components/Card.svelte";
  export let data;
</script>

<svelte:head>Portfolio</svelte:head>

<h1 style="font-size:48px; text-align:center">Portfolio</h1>
<section>
  {#if data.project.length}
    <Card>
      {#each data.project as project}
        <a prefetch="prefetch" href="/project/{project.slug.current}">
          {#if project.image}
            <SanityImage
              image={project.image}
              maxWidth={550}
              alt="Preview post image."
            />
          {/if}
          <h1>{project.title}</h1>
        </a>
      {/each}
    </Card>
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
