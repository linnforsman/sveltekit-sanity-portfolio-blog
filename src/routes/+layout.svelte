<script>
  import "./app.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import Footer from "$lib/components/Footer.svelte";
  export let data;
</script>

<Navigation title={data.siteconfig.title} />
<slot />
<Footer title={data.siteconfig.title} />
