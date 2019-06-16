<template>
  <div class="home">
    <Card hoverable center>
      <router-link to="/Color">Color</router-link>
    </Card>
    <Card hoverable center>
      <router-link to="/Button">Button</router-link>
    </Card>
    <Card hoverable center>
      <router-link to="/Icon">Icon</router-link>
    </Card>
    <Card hoverable center>
      <router-link to="/Card">Card</router-link>
    </Card>
    <Card hoverable center>
      <router-link to="/Affix">Affix</router-link>
    </Card>
    <Card hoverable center>
      <router-link to="/Alert">Alert</router-link>
    </Card>
    <Card hoverable center>
      <router-link to="/Tag">Tag</router-link>
    </Card>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.home {
  // display: flex;
  // padding-top: 20px;
}
</style>