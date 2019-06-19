<template>
  <div :class="classes">
    <div :class="lineClasses"></div>
    <div :class="textClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { validDirection, validAlign } from "../../util/index";

const prefixCls = "divider";
export default {
  name: "Divider",
  props: {
    type: {
      type: String,
      default: "horizonal",
      validator: validDirection
    },
    align: {
      type: String,
      default: "center",
      validator: validAlign
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [prefixCls, `${prefixCls}-${this.type}`];
    },
    lineClasses() {
      return [
        `${prefixCls}-line`,
        `${prefixCls}-line-${this.type}`,
        this.dashed ? `${prefixCls}-line-dashed` : ""
      ];
    },
    textClasses() {
      return [`${prefixCls}-text`, `${prefixCls}-text-${this.align}`];
    }
  }
};
</script>
