/**
 * 
 * 头部
 * 
 * Created by likaixuan on 2017/7/4.
 */

import Vue from "vue"
import ucarIcon from './src/icon';


ucarIcon.install = function (Vue) {
    Vue.component(ucarIcon.name,ucarIcon);
};

export default ucarIcon
