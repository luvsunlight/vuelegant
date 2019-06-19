<template>
  <div v-if="!status" :class="wrapClasses">
    <div :class="classes">
      <slot name="count">
        <div :class="countClasses">{{localCount}}</div>
      </slot>
    </div>
    <div :class="slotClasses">
      <slot name="default"></slot>
    </div>
  </div>
  <div v-else :class="statusClasses">
    <div :class="statusTypeClasses"></div>
    <span :class="statusTextClasses">{{text}}</span>
  </div>
</template>

<script>
import { validStatus } from "../../util/index";

const prefixCls = "badge";

export default {
  name: "Badge",
  props: {
    count: {
      type: Number | String,
      default: 0
    },
    overflowCount: {
      type: Number | String,
      default: 99
    },
    showZero: {
      type: Boolean,
      default: false
    },
    dot: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: "",
      validator: v => !v || validStatus(v)
    },
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}-wrap`];
    },
    classes() {
      return [prefixCls];
    },
    countClasses() {
      return [
        `${prefixCls}-default`,
        this.dot ? `${prefixCls}-dot` : `${prefixCls}-count`
      ];
    },
    slotClasses() {
      return `${prefixCls}-slot`;
    },
    statusClasses() {
      return `${prefixCls}-status`;
    },
    statusTypeClasses() {
      return [`${prefixCls}-status-${this.status}`, `${prefixCls}-status-dot`];
    },
    statusTextClasses() {
      return `${prefixCls}-status-text`;
    },
    localCount() {
      if (!this.showZero && this.count == 0) return "";
      if (this.dot) return "";
      if (this.text) return this.text;

      return this.count > this.overflowCount
        ? `${this.overflowCount}+`
        : this.count;
    }
  }
};
</script>
