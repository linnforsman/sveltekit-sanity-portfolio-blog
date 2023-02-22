<script>
  import Introduce from "$lib/components/Introduce.svelte";
  export let data;
</script>

<Introduce
  title={data.siteconfig.title}
  subtitle={data.siteconfig.subtitle}
  introduce={data.siteconfig.introduce}
/>
