<template>
  <v-icon :name="name" :class="classes" :scale="scale" :inverse="inverse"></v-icon>
</template>

<script>
import vIcon from "vue-awesome/components/Icon";
import "vue-awesome/icons/index.js";
import { validColor } from "../../util/base";

const prefixCls = "icon";

export default {
  name: "Icon",
  components: { vIcon },
  props: {
    name: {
      type: String,
      default: "cog"
    },
    scale: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: "",
      validator: validColor
    },
    inverse: {
      type: Boolean,
      default: false
    },
    pointer: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return [
        prefixCls,
        this.pointer ? "cursor-pointer" : "",
        this.color ? `${prefixCls}-color-${this.color}` : ""
      ];
    }
  }
};
</script>
