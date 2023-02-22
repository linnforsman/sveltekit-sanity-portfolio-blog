<script>
  import SanityImage from "$lib/components/SanityImage.svelte";
  export let data;
</script>

<svelte:head>Portfolio / {data.project.title}</svelte:head>

<article>
  <h1>{data.project.title}</h1>

  {#if data.project.image}
    <SanityImage image={data.project.image} maxWidth={700} />
  {/if}
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.project.type}</td>
        <td>{data.project.role}</td>
      </tr>
    </tbody>
  </table>
  <p>
    {data.project.desc}
  </p>
</article>

<style>
  h1 {
    font-size: 48px;
    font-weight: 400;
  }
  article {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 2rem;
  }
  p {
    margin: 52px 0px 0px;
  }
</style>
