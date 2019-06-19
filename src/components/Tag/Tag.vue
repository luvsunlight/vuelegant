<template>
  <Anim>
    <div v-if="showTag" :class="classes" :style="styles" @click="handleCheck">
      <slot name="default"></slot>
      <Icon v-if="closable" name="times" :class="closeClasses" @click.native="handleClose"></Icon>
    </div>
  </Anim>
</template>

<script>
import Icon from "../Icon";
import Anim from "../../animation/BaseAnim";
import { validColor } from "../../util/index";

const prefixCls = "tag";

export default {
  name: "Tag",
  components: { Icon, Anim },
  props: {
    name: {
      type: String,
      default: ""
    },
    closable: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "",
      validator: validColor
    }
  },
  data() {
    return {
      showTag: true,
      localChecked: this.color || this.checked,
      customColor: this.color.indexOf("#") !== -1
    };
  },
  computed: {
    classes() {
      return [
        prefixCls,
        this.localChecked ? `${prefixCls}-checked` : "",
        this.color && !this.customColor
          ? `${prefixCls}-color-${this.color}`
          : ""
      ];
    },
    styles() {
      return this.customColor
        ? { background: this.color, border: `1px solid ${this.color}` }
        : {};
    },
    closeClasses() {
      return `${prefixCls}-close`;
    }
  },
  methods: {
    handleCheck() {
      if (this.checkable) {
        this.localChecked = !this.localChecked;
        this.$emit("onChange", this.localChecked);
      }
    },
    handleClose() {
      this.showTag = !this.showTag;
      this.$emit("onClose");
    }
  }
};
</script>

