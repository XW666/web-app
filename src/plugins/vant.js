// 按需全局引入 vant组件
// 按需全局引入 vant组件
import Vue from 'vue'
import { Field } from 'vant'
import { Form } from 'vant';
import { Picker } from 'vant';
import { Popup } from 'vant';
import { Button } from 'vant';
import { Area } from 'vant';
import { Toast } from 'vant';
import { Cell } from 'vant';
import { CellGroup } from 'vant';
import { Icon } from 'vant';
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Toast);
Vue.use(Area);
Vue.use(Button);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Form);
Vue.use(Field)
