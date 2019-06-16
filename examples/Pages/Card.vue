<template>
  <div class="container">
    <Card title="title">正常的card</Card>
    <Card title="custom-title">修改title</Card>
    <Card title="custom-title" extra="extra">多了extra</Card>
    <Card title="title" extra="extra">
      <template v-slot:extra>
        <a href="#">extra slot</a>
      </template>extra slot 会直接替代extra属性
    </Card>
    <Card title="title" :headStyle="headStyle">修改headStyle</Card>
    <Card title="title" :bodyStyle="bodyStyle">修改bodyStyle</Card>
    <Card>没有title</Card>
    <Card title="title" :hoverable="true">hoverable:true</Card>
    <Card
      title="title"
      :bordered="false"
      style="background:#1abc9c;color:#fff"
    >bordered:false(适合其他背景)</Card>
    <Card title="title">
      <div>
        <img src="../../logo.png" alt="logo">
        <div>insert img</div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headStyle: {
        fontSize: "25px"
      },
      bodyStyle: {
        textAlign: "center"
      }
    };
  }
};
</script>

<style lang="less">
</style>