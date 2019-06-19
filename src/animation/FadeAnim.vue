<template>
  <transition name="fade-anim" mode="out-in">
    <slot></slot>
  </transition>
</template>

<script>
const prefixCls = "base-anim";

export default {
  name: "BaseAnim"
};
</script>

<style scoped>
.fade-anim-enter {
  opacity: 0;
}
.fade-anim-leave-to {
  opacity: 0;
}
.fade-anim-enter-active,
.fade-anim-leave-active {
  transition: all 0.5s ease;
}
</style>