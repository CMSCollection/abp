import Vue from "vue";
import { TodoItem } from "./TodoItem";

var app = new Vue({
    el: '#TodoApp',
    data: {
        todos: [
            new TodoItem(42, "fourty-two"),
            new TodoItem(43, "fourty-three")
        ]
    }
});