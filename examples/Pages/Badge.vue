<template>
  <div class="container">
    <Card>
      <!-- <Badge count="8"></Badge> -->
      <Badge count="8">
        <div class="sample"></div>
      </Badge>
      <Badge count="100">
        <div class="sample"></div>
      </Badge>
      <Badge count="100" text="news">
        <div class="sample"></div>
      </Badge>
      <Badge>
        <template v-slot:count>
          <Icon name="lightbulb"></Icon>
        </template>
        <div class="sample"></div>
      </Badge>
      <Badge count="0">
        <div class="sample"></div>
      </Badge>
      <Badge count="0" showZero>
        <div class="sample"></div>
      </Badge>
      <Badge dot>
        <div class="sample"></div>
      </Badge>
      <Badge dot>
        <Icon name="lightbulb"></Icon>
      </Badge>
      <Badge count="2" dot>可以是一行字</Badge>
      <Badge status="primary"></Badge>
      <Badge status="success"></Badge>
      <Badge status="info"></Badge>
      <Badge status="warning"></Badge>
      <Badge status="error"></Badge>
      <Badge status="primary" text="primary"></Badge>
      <Badge status="success" text="success"></Badge>
      <Badge status="info" text="info"></Badge>
      <Badge status="warning" text="warning"></Badge>
      <Badge status="error" text="error"></Badge>
    </Card>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.sample {
  width: 42px;
  height: 42px;
  border-radius: 5px;
  background: #ddd;
}
.badge-wrap {
  margin-right: 20px;
}
</style>