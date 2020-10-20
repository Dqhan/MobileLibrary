
import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import * as component from '../dist/mobile-bundle'

Vue.component('aui-button', component.Button)
Vue.component('aui-table', component.Table)
