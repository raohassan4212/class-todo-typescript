"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemCollection_1 = require("./itemCollection");
console.clear();
let col1 = new itemCollection_1.ItemCollection();
col1.addTodo("Namaz");
col1.addTodo("Dahe");
col1.addTodo("Burger");
col1.printDetail();
