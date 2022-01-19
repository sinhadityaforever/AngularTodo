import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos!: Todo[];

  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}
  deleteTodo(todo: Todo) {
    console.log(todo.sno);
    this.todos.splice(this.todos.indexOf(todo, 1));
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  todoAdd(todo: Todo) {
    console.log(todo);

    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  todoToggle(todo: Todo) {
    console.log('triggered');

    let index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
  }
}
