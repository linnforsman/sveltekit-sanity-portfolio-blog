<div>
  <slot name="image">
    <div class="image"><slot /></div>
  </slot>
  <slot name="date">No date provided.</slot>
  <slot name="header">No header provided.</slot>
  <slot name="desc">No description provided.</slot>
</div>

<style>
  .image :global(img) {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
</style>
