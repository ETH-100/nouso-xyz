<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ evaluate: number }>()
</script>

<template>
  <div class="icon-table">
    <i v-if="props.evaluate === 1" class="iconfont support icon-done"></i>
    <i v-else-if="props.evaluate === 0" class="iconfont incomplete icon-hulve"></i>
    <i v-else-if="props.evaluate === -1" class="iconfont incorrect icon-cuowukongxin"></i>
  </div>
</template>

<style scoped lang="scss">
.icon-table {
  width: 100% !important;
  height: 100% !important;

  .support {
    color: rgb(2, 190, 2);
  }

  .incorrect {
    color: rgb(248, 14, 45);
  }
}
</style>
