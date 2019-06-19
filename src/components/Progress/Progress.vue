<template>
  <div :class="wrapClasses" :style="wrapStyles">
    <div v-if="showInfo" :class="infoClasses">
      <span v-if="isFull || isError" :style="colorStyles">
        <slot>
          <Icon :name="iconName" :style="iconStyles"></Icon>
        </slot>
      </span>
      <span v-else>{{formatter(percent)}}</span>
    </div>
    <div :class="classes" :style="styles"></div>
  </div>
</template>

<script>
import { validProgress, validShape, validColor } from "../../util/index";
import Icon from "../Icon/index";

const prefixCls = "progress";
export default {
  name: "vProgress",
  components: { Icon },
  props: {
    percent: {
      type: Number | String,
      default: 0
    },
    type: {
      type: String,
      default: "square",
      validator: validShape
    },
    // TODO square && circle
    status: {
      type: String,
      default: "primary",
      validator: validProgress
    },
    formatter: {
      type: Function,
      default: percent => percent + "%"
    },
    showInfo: {
      type: Boolean,
      default: true
    },
    strokeWidth: {
      type: Number | String,
      default: "10"
    },
    strokeColor: {
      type: String,
      default: "primary",
      validator: validColor
    }
  },
  data() {
    return {
      isFull: Number(this.percent) == 100,
      isError: this.status === "error"
    };
  },
  computed: {
    wrapClasses() {
      return `${prefixCls}-wrap`;
    },
    wrapStyles() {
      return {
        height: `${this.strokeWidth}px`,
        fontSize: `${this.strokeWidth}px`
      };
    },
    classes() {
      return [
        prefixCls,
        `${prefixCls}-${this.status}`,
        `${prefixCls}-color-${this.strokeColor}`,
        this.isFull ? `${prefixCls}-full` : ""
      ];
    },
    styles() {
      return {
        width: `${this.percent}%`,
        border: "none",
        borderRadius: `${this.strokeWidth / 2}px`
      };
    },
    infoClasses() {
      return `${prefixCls}-info`;
    },
    colorStyles() {
      return {
        color: this.isError ? "#ee5253" : "#1dd1a1"
      };
    },
    iconName() {
      return this.isError ? "times-circle" : "check-circle";
    },
    iconStyles() {
      return {
        height: this.strokeWidth,
        margin: 0
      };
    }
  }
};
</script>