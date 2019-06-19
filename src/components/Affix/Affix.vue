<template>
  <span class="affix">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "Affix",
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number
    }
  }
};
</script>
