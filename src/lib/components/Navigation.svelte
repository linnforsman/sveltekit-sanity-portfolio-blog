<script>
  export let title;
</script>

<nav>
  <h2 class="logo">
    <a href="/">{title}</a>
  </h2>
  <a href="/blog">Blog</a>
  <a href="/project">Portfolio</a>
</nav>

<style>
  h2 {
    font-weight: 500;
  }

  a {
    font-size: 20px;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
  }
</style>
