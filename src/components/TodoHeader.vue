<template>
  <!-- 输入框 -->
  <header class="header">
    
    <h1> {{$t('title')}} <button @click="toggleLanguage" class="language-toggle" style="font-size: large;">{{$t('switchLanguage')}}</button></h1>
    
    <input @keyup.enter = "handleAdd"
    v-model="todoName" :placeholder="$t('placeholder')"  class="new-todo" />
    <button @click="handleAdd" class="add">{{$t('addTask')}}</button>
    
  </header>

</template>

<script>
export default {
  title:'小黑记事本',
  data(){
    return {
      todoName:''
    }
  },
  methods:{
    handleAdd(){
      if (this.todoName.trim() === ''){
        alert(this.$t('alertNotEmpty'))
        return
      }
      // console.log(this.todoName)
      this.$emit('add',this.todoName)
      this.todoName = ''
    },
        toggleLanguage() {
      // 切换语言逻辑
      // 这里我们假设有两种语言：英语（'en'）和中文（'zh'）
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en';
    }
  }
}
</script>

<style>
.language-toggle {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #f0f0f0; /* Light grey background */
  border: 1px solid #ccc; /* Add a border */
  border-radius: 4px; /* Rounded corners */
}

/* 可以根据需要进一步美化按钮 */
.language-toggle:hover {
  background-color: #e8e8e8; /* Slightly darker grey on hover */
}

</style>