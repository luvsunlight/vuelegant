<template>
  <span :class="classes">
    <Icon v-if="!src" :name="icon" :class="iconClasses" :scale="iconScale"></Icon>
    <img v-else :class="imgClasses" :src="src" :alt="alt" @error="handleError">
  </span>
</template>

<script>
import { validShape, validSize } from "../../util/index";
import Icon from "../Icon/index";

const prefixCls = "avatar";

export default {
  name: "Avatar",
  components: { Icon },
  props: {
    icon: {
      type: String,
      default: "user"
    },
    shape: {
      type: String,
      default: "circle",
      validator: validShape
    },
    size: {
      type: String,
      default: "base",
      validator: validSize
    },
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    loadError: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return [
        prefixCls,
        `${prefixCls}-${this.shape}`,
        `${prefixCls}-${this.size}`
      ];
    },
    iconClasses() {
      return `${prefixCls}-icon`;
    },
    iconScale() {
      return { large: 2, base: 1, small: 0.7 }[this.size];
    },
    imgClasses() {
      return `${prefixCls}-img`;
    }
  },
  methods: {
    handleError(e) {
      this.$emit("loadError", e);
    }
  }
};
</script>

// TODO Avatar对齐问题