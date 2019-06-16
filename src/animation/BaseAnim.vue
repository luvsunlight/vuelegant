<template>
  <transition name="item-anim" :class="classes" mode="out-in">
    <slot></slot>
  </transition>
</template>

<script>
const prefixCls = "base-anim";

export default {
  name: "BaseAnim",
  props: {
    enterX: {
      type: Number,
      default: 10
    },
    enterY: {
      type: Number,
      default: 0
    },
    leaveX: {
      type: Number,
      default: 100
    },
    leaveY: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes() {
      return ``;
    }
  }
};
</script>

<style scoped>
.item-anim-enter {
  opacity: 0;
  transform: translateY(10px);
}
.item-anim-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.item-anim-enter-active,
.item-anim-leave-active {
  transition: all 0.5s ease;
}
</style>