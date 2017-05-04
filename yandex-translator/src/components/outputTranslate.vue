<template lang="pug">
  .output
    .panel.panel-success
      .panel-body {{ outputText }}
</template>

<script>
export default {
  name: 'output',
  props: {
    outputText: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .output {
    margin: 40px 0;

    & .panel-body {
      padding-top: 30px;
      padding-bottom: 30px;
      color: forestgreen;
      font-size: 24px;
    }
  }
</style>
