import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../interfaces/todo.interfaces';

@Component({
  selector: 'todo-item',
  template: `
    <div>
      <input
        type="checkbox"
        [(ngModel)]="todo.completed"  
      >
      <input
        type="text"
        [(ngModel)]="todo.title"  
      >
      <button (click)="onRemove.emit(todo)">
        X
      </button>
    </div>
  `,
  styles: [
  ]
})
export class TodoItemComponent {
  @Input() todo: Todo
  @Output() onRemove: EventEmitter<Todo> = new EventEmitter()
}
