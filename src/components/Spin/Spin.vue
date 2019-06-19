<template>
  <FadeAnim>
    <div v-show="showSpin" :class="wrapClasses">
      <div>
        <slot name="default">
          <div>
            <div v-if="type=='spin'" :class="classes">
              <svg viewBox="25 25 50 50" class="svg">
                <circle cx="50" cy="50" r="20" class="circle"></circle>
              </svg>
            </div>
            <div v-else-if="type=='jellybox'" :class="classes">
              <div class="div"></div>
              <div class="div"></div>
            </div>
            <div v-else-if="type=='ring'" :class="classes">
              <svg class="svg" viewBox="0 0 50 50">
                <circle class="ring" cx="25" cy="25" r="20"></circle>
                <circle class="ball" cx="25" cy="5" r="3.5"></circle>
              </svg>
            </div>
          </div>
        </slot>
        <div v-if="tip" :class="tipClasses">{{tip}}</div>
      </div>
    </div>
  </FadeAnim>
</template>

<script>
import FadeAnim from "../../animation/FadeAnim";
import { validSize, validSpin } from "../../util/index";
const prefixCls = "spin";

export default {
  name: "Spin",
  components: { FadeAnim },
  props: {
    type: {
      type: String,
      default: "spin",
      validator: validSpin
    },
    size: {
      type: String,
      default: "base",
      validator: validSize
    },
    tip: {
      type: String,
      default: ""
    },
    showSpin: {
      type: Boolean,
      default: true
    },
    fix: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}-wrap`, this.fix ? `${prefixCls}-wrap-fix` : ""];
    },
    classes() {
      return [prefixCls, `anim-${this.type}`, `${prefixCls}-size-${this.size}`];
    },
    tipClasses() {
      return `${prefixCls}-tip`;
    }
  }
};
</script>