import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:svg-icons-register';
import './index.css';
import { setupStore } from '@/stores';

if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}
const app = createApp(App);
setupStore(app);
app.mount('#app');

