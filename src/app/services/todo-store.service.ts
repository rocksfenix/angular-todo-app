import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {
  private todoRoot: Todo[] = []

  get todos() {
    return this.todoRoot
  }

  get statistics() {
    const { todoRoot: todos } = this
    const completed = todos.filter(t => t.completed).length
    const incompleted = todos.filter(t => !t.completed).length
    const percentCompleted = completed / todos.length
    const percentIncompleted = incompleted / todos.length

    return {
      completed,
      incompleted,
      percentCompleted,
      percentIncompleted
    }
  }

  addTodo(newTodo: Todo) {
    this.todoRoot.push(newTodo)
    console.log(this.todoRoot)
  }

  removeTodo(todo: Todo) {
    this.todoRoot = this.todoRoot.filter(
      item => item.id !== todo.id
    )
  }
}
