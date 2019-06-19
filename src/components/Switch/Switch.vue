<template>
  <span :class="classes" @click="toggleSwitch">
    <span :class="circleClasses"></span>
    <span v-if="onText" v-show="localChecked" :class="onClasses">{{onText}}</span>
    <span v-if="offText" v-show="!localChecked" :class="offClasses">{{offText}}</span>
  </span>
</template>

<script>
const prefixCls = "switch";

export default {
  name: "vSwitch",
  model: {
    prop: "checked",
    event: "check"
  },
  props: {
    checked: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onText: {
      type: String,
      default: ""
    },
    offText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      localChecked: this.checked
    };
  },
  computed: {
    classes() {
      return [
        prefixCls,
        this.localChecked ? `${prefixCls}-checked` : `${prefixCls}-unchecked`,
        this.disabled ? `${prefixCls}-disabled` : ""
      ];
    },
    circleClasses() {
      return [
        `${prefixCls}-circle`,
        this.localChecked
          ? `${prefixCls}-circle-checked`
          : `${prefixCls}-circle-unchecked`,
        this.disabled ? `${prefixCls}-circle-disabled` : ""
      ];
    },
    onClasses() {
      return `${prefixCls}-on`;
    },
    offClasses() {
      return `${prefixCls}-off`;
    }
  },
  methods: {
    toggleSwitch() {
      if (!this.disabled) {
        this.localChecked = !this.localChecked;
        this.$emit("check", this.localChecked);
        this.$emit("onChange", this.localChecked);
      }
    }
  }
};
</script>