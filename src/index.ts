import { TodoItem } from "./todoItem";

console.clear();

let todo1: TodoItem = new TodoItem(1,"some",false);
let todo2: TodoItem = new TodoItem(2,"soup",false);

todo1.printDetail();
todo2.printDetail();