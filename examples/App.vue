<template>
  <div id="app">
    <div class="nav">
      {{navText}}
      <span class="back" @click="$router.push('/Home')">
        <Icon name="home"></Icon>Home
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navText: ""
    };
  },
  created() {
    console.log(this);
  },
  watch: {
    "$route.name"(v) {
      this.navText = v;
    }
  }
};
</script>

<style lang="less">
#app {
  padding-top: 80px;
}

.nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 50px;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #dedede;
  box-shadow: 0 1px 6px #ddd;
  line-height: 30px;
  background: #fff;
  z-index: 10000;

  .back {
    transition: all 0.5s;
    position: absolute;
    left: 10px;
    padding: 0 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      border: 1px solid #ddd;
      box-shadow: 0 5px 20px #ccc;
    }
  }
}

// .slide-enter-active,
// .slide-leave-active {
//   // transition: opacity 0.5s;
// }
// .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>
