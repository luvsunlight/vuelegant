<template>
  <div style="position:relative">
    <Card>
      <Spin size="large"></Spin>
      <Spin></Spin>
      <Spin size="small"></Spin>
      <Spin tip="加载中......"></Spin>
      <Spin>
        <Icon name="spinner"></Icon>
      </Spin>
      <vSwitch v-model="spinning"></vSwitch>
    </Card>
    <Card>
      <Spin type="jellybox" size="large"></Spin>
      <Spin type="jellybox"></Spin>
      <Spin type="jellybox" size="small"></Spin>
    </Card>
    <Card>
      <Spin type="ring" size="large"></Spin>
      <Spin type="ring"></Spin>
      <Spin type="ring" size="small"></Spin>
    </Card>
    <Card>
      <div style="position:relative">
        凤凰台上凤凰游，凤去台空江自流。
        吴宫花草埋幽径，晋代衣冠成古丘。
        三山半落青天外，二水中分白鹭洲。
        总为浮云能蔽日，长安不见使人愁。
        凤凰台上凤凰游，凤去台空江自流。
        吴宫花草埋幽径，晋代衣冠成古丘。
        三山半落青天外，二水中分白鹭洲。
        总为浮云能蔽日，长安不见使人愁。
        凤凰台上凤凰游，凤去台空江自流。
        吴宫花草埋幽径，晋代衣冠成古丘。
        三山半落青天外，二水中分白鹭洲。
        总为浮云能蔽日，长安不见使人愁。
        <Spin type="ring" fix tip="..." size="large" :showSpin="spinning"></Spin>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spinning: true
    };
  }
};
</script>

<style lang='less' scoped>
.card-content {
  position: relative;
}
</style>