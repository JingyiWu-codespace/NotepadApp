<template>
  <!-- 主体区域 -->
  
  <section id="app">
    
    <TodoHeader @add="handleAdd"></TodoHeader>
    
    <TodoMain @del = "handelDel" :list = "list"></TodoMain>
    <TodoFooter @clear="handleClear" :list="list"></TodoFooter>
    
  </section>
  
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

// 渲染功能
// 1. 提供数据 -> 提供在公共的父组件 App.vue
// 2. 通过父传子，将数据传递给TodoMain
// 3. 利用 v-for渲染

// 删除功能：
// 1. 监听事件（监听删除的点击） 携带id
// 2. 子传父，将删除的id传递给父组件
// 3. 进行删除 filter

// 底部合计：
// 1. 父传子 传list => 渲染
// 清空： 子传父，父清空
// 持久化存储：使用watch 深度监视

export default {
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list'))||[]
    }
  },
  methods:{
    handleAdd (todoName){
      this.list.unshift({
        id: +new Date(),
        name: todoName
      })
    },
    handelDel(id){
      this.list = this.list.filter(item=>item.id!==id)
    },
    handleClear(){
      this.list=[]
    }
  },
  watch:{
    list: {
      deep:true,
      handler(newValue){
        localStorage.setItem('list',JSON.stringify(newValue))
      }
    }
  },
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  }
}
</script>

<style>

</style>
