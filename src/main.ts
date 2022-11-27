import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Limo from './components/Limo.vue'
import Limo2 from './components/Limo2.vue'


const history = createWebHashHistory();
const router = createRouter({
    history :history,
    routes:[
        {path:'/',component:Limo},
        {path:"/xxx",component:Limo2}
    ]
});

const app = createApp(App);
app.use(router);
app.mount("#app");
