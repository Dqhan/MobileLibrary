import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

const component = window["aui-library"];

Vue.component('aui-button', component.AuiButton)
Vue.component('aui-table', component.AuiTable)
