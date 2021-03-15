import { Component } from '@angular/core';
import { TodoStoreService } from '../services/todo-store.service';

@Component({
  selector: 'todo-form',
  template: `
    <input
      type="text"
      [(ngModel)]="title"
      (keyup.enter)="newTodo()"
    >
    <button (click)="newTodo()">
      Agregar Tarea
    </button>
  `,
  styles: [
  ]
})
export class TodoFormComponent {
  title = ''

  constructor(
    private store: TodoStoreService
  ) {}

  newTodo() {
    if (this.title.trim() !== '') {
      this.store.addTodo({
        title: this.title,
        completed: false,
        id: Math.random()
      })
      this.title = ''
    }
  }
}
