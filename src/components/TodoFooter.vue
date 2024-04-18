<template>
  <!-- 统计和清空 -->
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count">{{$t('sum')}}<strong> {{ list.length}} </strong></span>
    <!-- 清空 -->
    <button class="clear-completed" @click="clear">
      {{$t('empty')}}
    </button>
  </footer>
</template>

<script>
export default {
  props:{
    list:Array
  },
  methods: {
    clear(){this.$emit('clear')}
}
}

</script>

<style>
.language-toggle {
    /* 样式示例 */
    margin-left: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }

</style>