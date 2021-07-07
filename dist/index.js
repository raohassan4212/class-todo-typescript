"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
console.clear();
let todo1 = new todoItem_1.TodoItem(1, "some", false);
let todo2 = new todoItem_1.TodoItem(2, "soup", false);
todo1.printDetail();
todo2.printDetail();
