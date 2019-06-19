<template>
  <Card width="400" hoverable>
    <vProgress percent="10"></vProgress>
    <vProgress percent="10" :showInfo="false"></vProgress>
    <vProgress percent="100"></vProgress>
    <vProgress percent="90" strokeColor="paradise"></vProgress>
    <vProgress percent="100" strokeWidth="15"></vProgress>
    <vProgress percent="10" :formatter="formatter"></vProgress>
    <vProgress percent="100">Done</vProgress>
    <vProgress :percent="percent"></vProgress>
    <Icon name="plus" @click.native="percent+=10"></Icon>
    <Icon name="minus" @click.native="percent-=10"></Icon>
    <vProgress status="error" percent="100"></vProgress>
    <vProgress status="error" percent="100">error</vProgress>
    <vProgress status="active" percent="80"></vProgress>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      formatter: v => v / 100,
      percent: 20
    };
  }
};
</script>

<style lang='less' scoped>
</style>