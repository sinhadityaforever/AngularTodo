import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  @ViewChild('addTodoForm', { static: false })
  addTodoForm!: NgForm;
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    const todo: Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.addTodo.emit(todo);
    this.addTodoForm.reset();
  }
}
