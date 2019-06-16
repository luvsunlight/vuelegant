<template>
  <div class="container">
    <Card>
      <Tag>tag</Tag>
    </Card>
    <Card>
      {{closeText}}
      <Tag closable @onClose="closeText='closed'">tag</Tag>
    </Card>
    <Card>
      <Tag checkable @onChange="handleChange">{{checked}}</Tag>
    </Card>
    <Card>
      <Tag checkable color="red">red</Tag>
    </Card>
    <Card>
      <Tag checkable color="#D980FA">custom color</Tag>
    </Card>
    <Card>
      <Tag checkable color="success">success</Tag>
      <Tag checkable color="info">info</Tag>
      <Tag checkable color="warning">warning</Tag>
      <Tag checkable color="error">error</Tag>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeText: "unclose",
      checked: true
    };
  },
  methods: {
    handleChange(checked) {
      this.checked = checked;
    }
  }
};
</script>

<style lang='less' scoped>
</style>