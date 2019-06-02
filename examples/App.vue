<template>
  <div id="app">
    <div class="nav">
        {{DemoName}}
      <span class="back" @click="$router.push('/')">Back</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      DemoName: "DEMO展示"
    };
  }
};
</script>

<style lang="less">
* {
  margin: 0;
}

#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.nav {
    position:relative;
  height: 30px;
  background: #1abc9c;
  color: #fff;
  line-height: 30px;
  .back {
    position: absolute;
    left: 10px;
    &:hover {
      font-weight: bold;
    }
  }
}
</style>
