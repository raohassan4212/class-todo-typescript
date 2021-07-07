"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const todoItem_1 = require("./todoItem");
class ItemCollection {
    constructor(item = []) {
        this.item = item;
        this.nextId = 1;
    }
    addTodo(task) {
        let items = new todoItem_1.TodoItem(this.nextId, task, false);
        this.nextId++;
        this.item.push(items);
    }
    printDetail() {
        this.item.forEach((items) => {
            items.printDetail();
        });
    }
}
exports.ItemCollection = ItemCollection;
