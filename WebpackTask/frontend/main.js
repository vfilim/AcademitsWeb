import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './style.scss'

import Vue from 'vue';

import todoList from './todoList.vue';

new Vue({
    render: h => h(todoList)
}).$mount('#app');