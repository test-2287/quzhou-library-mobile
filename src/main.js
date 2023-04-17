import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import './style.scss'

import 'virtual:svg-icons-register'

import 'vant/lib/index.css'
import {
    Tab,
    Tabs,
    ConfigProvider,
    Button,
    Sidebar,
    SidebarItem,
    Checkbox,
    CheckboxGroup,
    Popup,
    Picker,
    Dialog
} from 'vant'


const app = createApp(App)

app.use(router)
    .use(Tab)
    .use(Tabs)
    .use(ConfigProvider)
    .use(Button)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Popup)
    .use(Picker)
    .use(Dialog)


app.mount('#app')
