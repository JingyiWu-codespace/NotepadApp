import Vue from 'vue'
import App from './App.vue'
import './styles/index.css'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Vue.config.productionTip = false

const messages = {
  en: {
    title: '          Notepad          ',
    placeholder: 'Example: Play basketball',
    addTask: 'Add Task',
    alertNotEmpty: 'Task name cannot be empty',
    switchLanguage: 'Chinese 🇨🇳',
    sum: 'Total Count: ',
    empty: 'Clear Tasks '
    // ... other messages
  },
  zh: {
    title: '记事本',
    placeholder: '示例：打篮球',
    addTask: '添加任务',
    alertNotEmpty: '任务名称不能为空',
    switchLanguage: 'English 🇺🇸',
    sum: '合 计： ',
    empty: '清空任务 '
    // ... other messages
  },

};

const i18n = new VueI18n({
  locale: 'en', // 设置语言环境
  fallbackLocale: 'en', // 设置备用语言环境
  messages // 设置语言环境信息
});


new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
