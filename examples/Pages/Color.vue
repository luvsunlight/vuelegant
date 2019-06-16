<template>
  <div class="container">
    <Card v-for="color in colors" :key="color" :color="color" :bodyStyle="bodyStyle" center>
      <div>{{color}}</div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodyStyle: {
        height: "100px",
        lineHeight: "100px",
        fontSize: "20px"
      },
      colors: [
        "primary",
        "success",
        "info",
        "error",
        "red",
        "blue",
        "green",
        "purple",
        "grey",
        "pink",
        "yellow",
        "orange",
        "martina",
        "barared",
        "androidgreen",
        "energos",
        "spray",
        "paradise",
        "dupin",
        "aurora",
        "reef",
        "waterfall",
        "flatflesh",
        "melonmelody"
      ]
    };
  }
};
</script>

<style lang='less' scoped>
</style>