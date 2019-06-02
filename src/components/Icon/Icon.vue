<template>
  <v-icon :name="name" :scale="scale" :inverse="inverse"></v-icon>
</template>

<script>
import Vue from "vue";
import vIcon from "vue-awesome/components/Icon";
import "vue-awesome/icons/index.js";

export default {
  name: "Icon",
  components: { vIcon },
  props: {
    name: {
      type: String,
      default: "search"
    },
    scale: {
      type: Number,
      default: 1
    },
    inverse: {
      type: Boolean,
      default: false
    }
  }
};
</script>
