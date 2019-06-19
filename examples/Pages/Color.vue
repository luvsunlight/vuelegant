<template>
  <div class="container">
    <Card
      v-for="color in colors"
      :key="color"
      :color="color"
      :bodyStyle="bodyStyle"
      center
      hoverable
      pointer
    >
      <div>{{color}}</div>
    </Card>
  </div>
</template>

<script>
import { baseColorSet } from "@/util/base";

export default {
  data() {
    return {
      bodyStyle: {
        height: "100px",
        lineHeight: "100px",
        fontSize: "20px"
      },
      colors: baseColorSet
    };
  }
};
</script>

<style lang='less' scoped>
</style>