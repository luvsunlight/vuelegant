<template>
  <div :class="wrapClasses">
    <div :class="slotClasses" @mouseover="handleHover" @mouseout="handleBlur">
      <slot name="default"></slot>
    </div>
    <FadeAnim>
      <div v-show="localVisible" :class="classes" :style="styles">
        <div :class="contentClasses">
          <div :class="arrowClasses"></div>
          <div :class="innerClasses">
            <slot name="content">{{content}}</slot>
          </div>
        </div>
      </div>
    </FadeAnim>
  </div>
</template>

<script>
import FadeAnim from "../../animation/FadeAnim";
import { validTheme, validPlacement } from "../../util/index";
const prefixCls = "tooltip";

export default {
  name: "Tooltip",
  components: { FadeAnim },
  model: { prop: "visible", event: "onChange" },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ""
    },
    maxWidth: {
      type: Number | String,
      default: 160
    },
    theme: {
      type: String,
      default: "dark",
      validator: validTheme
    },
    placement: {
      type: String,
      default: "top",
      validator: validPlacement
    }
  },
  data() {
    return {
      localVisible: this.visible
    };
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}-wrap`];
    },
    slotClasses() {
      return `${prefixCls}-slot`;
    },
    classes() {
      return [
        prefixCls,
        `${prefixCls}-theme-${this.theme}`,
        `${prefixCls}-placement-${this.placement}`
      ];
    },
    styles() {
      return {
        maxWidth: `${this.maxWidth}px`
      };
    },
    contentClasses() {
      return `${prefixCls}-content`;
    },
    arrowClasses() {
      return `${prefixCls}-arrow`;
    },
    innerClasses() {
      return `${prefixCls}-inner`;
    }
  },
  methods: {
    handleHover(e) {
      this.localVisible = true;
      this.$emit("onChange", this.localVisible);
    },
    handleBlur(e) {
      this.localVisible = false;
      this.$emit("onChange", this.localVisible);
    }
  }
};
</script>