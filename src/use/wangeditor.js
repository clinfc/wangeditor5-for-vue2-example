import Vue from 'vue'
import { WeToolbar, WeEditable, WeEditor, registToggleMode } from 'wangeditor5-for-vue2'
import '@wangeditor/editor/dist/css/style.css'

registToggleMode({ menu: 'toggleModeButton' })

Vue.use(WeToolbar)
Vue.use(WeEditable)
Vue.use(WeEditor)
