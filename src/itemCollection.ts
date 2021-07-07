import { TodoItem } from "./todoItem";

export class ItemCollection {
    private nextId: number = 1

    public constructor(public item: TodoItem[] = []) {

    }

    addTodo(task: string): void {
        let items:TodoItem = new TodoItem(this.nextId,task, false);
        this.nextId ++;
        this.item.push(items);
    }

    printDetail(): void {
        this.item.forEach((items: TodoItem) => {
            items.printDetail();
        })
    }
}