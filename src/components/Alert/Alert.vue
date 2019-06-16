<template>
  <Anim>
    <div v-if="showAlert">
      <div :class="classes">
        <!-- Icon -->
        <span v-if="localShowIcon" :class="IconClasses">
          <slot name="icon">
            <Icon :name="IconName" :scale="desc?2:1"></Icon>
          </slot>
        </span>
        <!-- Content -->
        <div>
          <div v-if="desc" :class="descClasses">{{desc}}</div>
          <div>
            <slot name="default"></slot>
          </div>
        </div>
        <!-- close Icon -->
        <span v-if="closable" :class="closeClasses" @click="handleClose">
          <Icon v-if="!closeText" name="times"></Icon>
          <span>{{closeText}}</span>
        </span>
      </div>
    </div>
  </Anim>
</template>

<script>
import Anim from "../../animation/BaseAnim";
import Icon from "../Icon";
import oneOf from "../../util/index";

const prefixCls = "alert";
export default {
  name: "Alert",
  components: { Icon, Anim },
  props: {
    type: {
      type: String,
      default: "info",
      validator: value => oneOf(value, ["info", "success", "warning", "error"])
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String,
      default: ""
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    Icon: {
      type: String,
      default: ""
    },
    banner: {
      type: Boolean,
      default: false
    },
    desc: {
      type: String,
      default: ""
    }
  },
  beforeMount() {
    if (this.banner) {
      this.localType = "warning";
      this.localShowIcon = true;
    }
  },
  data() {
    return {
      showAlert: true,
      localType: this.type,
      localShowIcon: this.showIcon
    };
  },
  computed: {
    IconName() {
      return {
        info: "info-circle",
        success: "check-circle",
        warning: "exclamation-circle",
        error: "times-circle"
      }[this.type];
    },
    classes() {
      return [`${prefixCls}-${this.localType}`, prefixCls];
    },
    wrapClasses() {
      return `${prefixCls}-wrap`;
    },
    descClasses() {
      return `${prefixCls}-desc`;
    },
    IconClasses() {
      return `${prefixCls}-icon`;
    },
    closeClasses() {
      return `${prefixCls}-close`;
    }
  },
  methods: {
    handleClose(e) {
      this.showAlert = false;
      this.$emit("onClose", e);
    }
  }
};
</script>

<style lang='less' scoped>
</style>