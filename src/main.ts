import { createApp } from "vue";
import App from "./App.vue";
import icon from './plugins/icon';
import msg from './plugins/msg'


declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $msg: any
    }
}

const app = createApp(App);

// 使用icon插件
app.use(icon);

// 使用msg插件
app.use(msg);

app.mount("body");