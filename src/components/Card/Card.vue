<template>
  <div :class="classes" :style="styles">
    <div :class="navClasses" v-if="title || extra">
      <span :class="navTitleClasses" :style="headStyle">{{title}}</span>
      <span :class="navExtraClasses">
        <slot name="extra">{{extra}}</slot>
      </span>
    </div>
    <div :class="contentClasses" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { validColor } from "../../util/index";
const prefixCls = "card";

export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: ""
    },
    extra: {
      type: String,
      default: ""
    },
    width: { type: String | Number, default: "300" },
    center: { type: Boolean, default: false },
    pointer: { type: Boolean, default: false },
    headStyle: {
      type: Object,
      default: () => {}
    },
    bodyStyle: {
      type: Object,
      default: () => {}
    },
    color: {
      type: String,
      default: "",
      validator: validColor
    },
    bordered: {
      type: Boolean,
      default: true
    },
    hoverable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        prefixCls,
        this.bordered ? `${prefixCls}-bordered` : "",
        this.hoverable ? `${prefixCls}-hoverable` : "",
        this.color ? `${prefixCls}-color-${this.color}` : "",
        this.center ? `${prefixCls}-center` : "",
        this.pointer ? "cursor-pointer" : ""
      ];
    },
    styles() {
      return {
        width: `${this.width}px`
      };
    },
    navClasses() {
      return `${prefixCls}-nav`;
    },
    navTitleClasses() {
      return `${prefixCls}-nav-title`;
    },
    navExtraClasses() {
      return `${prefixCls}-nav-extra`;
    },
    contentClasses() {
      return `${prefixCls}-content`;
    }
  }
};
</script>
