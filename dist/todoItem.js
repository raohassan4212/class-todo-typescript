"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, completel) {
        this.id = id;
        this.task = task;
        this.complete = completel;
    }
    printDetail() {
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`);
    }
}
exports.TodoItem = TodoItem;
