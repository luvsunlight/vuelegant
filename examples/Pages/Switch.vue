<template>
  <div class="container">
    <Card>
      <vSwitch></vSwitch>
      <vSwitch onText="开" offText="关"></vSwitch>
      <vSwitch onText="开" offText="关" disabled></vSwitch>
      <vSwitch :checked="false"></vSwitch>
      <vSwitch v-model="checked"></vSwitch>
      {{checked}}
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style lang='less' scoped>
</style>