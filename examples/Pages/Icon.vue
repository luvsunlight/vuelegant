<template>
  <Card>
    <Icon :scale="0.5"></Icon>
    <Icon></Icon>
    <Icon :scale="2"></Icon>
    <Icon :inverse="true" class="inverse"></Icon>
    <Icon color="success"></Icon>
  </Card>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.inverse {
  background: #aaa;
}
</style>