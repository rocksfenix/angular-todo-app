import { Component } from '@angular/core';
import { TodoStoreService } from '../services/todo-store.service';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <todo-item
        *ngFor="let todo of store.todos"
        [todo]="todo"
        (onRemove)="store.removeTodo($event)"
      ></todo-item>
    </ul>
  `,
  styles: [
  ]
})
export class TodoListComponent {
  constructor(
    public store: TodoStoreService
  ) {}
}
