import { ItemCollection } from "./itemCollection";
import { TodoItem } from "./todoItem";

console.clear();

let col1: ItemCollection = new ItemCollection();

col1.addTodo("Namaz");
col1.addTodo("Dahe");
col1.addTodo("Burger");

col1.printDetail();
