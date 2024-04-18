<template>
  <!-- 列表区域 -->
    <section class="main">
      <ul class="todo-list">
        <li v-for="(item, index) in list" :key="item.id" class="todo">
          <div class="view">
            <span class="index">{{index+1}}</span> <label>{{item.name}}</label>
            <button @click = "handleDel(item.id)" class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>

/*
 添加功能：
 1. 收集表单数据 -> v-model
 2. 监听事件 (回车 + 点击 都要进行添加)
 3. 子传父，将任务名称传递给父组件App.vue
 4. 进行添加 unshift (自己的数据自己负责)
*/

export default {
  props:{
    list: Array
  },
  methods:{
    handleDel(id){
      // console.log(id)
      this.$emit('del',id)
    }
  }
}
</script>

<style>

</style>