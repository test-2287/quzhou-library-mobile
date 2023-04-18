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
    Dialog,
    Cascader,
    Radio,
    RadioGroup
} from 'vant';

// import { Form, Field } from 'vee-validate';


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
    .use(Cascader)
    .use(Radio)
    .use(RadioGroup)
    // .use(Form)
    // .use(Field)


app.mount('#app')
