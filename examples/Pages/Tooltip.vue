<template>
  <div class="container">
    <Card>
      <Tooltip content="tooltip">tooltip</Tooltip>
      <Tooltip>
        <template v-slot:content>
          <Icon></Icon>
        </template>
        tooltip
      </Tooltip>
      <Tooltip content="v-model" v-model="visible">{{visible}}</Tooltip>
      <hr>
      <!-- <Tooltip content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人">jobs</Tooltip> -->
      <Tooltip content="tooltip" theme="light">tooltip</Tooltip>
    </Card>
    <Card>
      <Tooltip content="tooltip" placement="top">top</Tooltip>
      <Tooltip content="tooltip" placement="right">right</Tooltip>
      <Tooltip content="tooltip" placement="left">left</Tooltip>
      <Tooltip content="tooltip" placement="bottom">bottom</Tooltip>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  }
};
</script>

<style lang='less' scoped>
</style>