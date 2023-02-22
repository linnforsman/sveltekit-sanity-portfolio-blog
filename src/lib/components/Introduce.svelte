<script>
  export let title;
  export let subtitle;
  export let introduce;
</script>

<section>
  <h3>{subtitle}</h3>
  <h1>{title}</h1>
  <p>{introduce}</p>
</section>

<style>
  section {
    text-align: center;
  }
  h1 {
    font-size: 48px;
    font-weight: 500;
  }
  p {
    margin: 52px 0px 0px;
  }
</style>
