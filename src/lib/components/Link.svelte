<script>
  export let portableText;
</script>

<a href={portableText.value.href} rel="noreferrer" target="_blank">
  <slot />
</a>
