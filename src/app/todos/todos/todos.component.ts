import { Component, OnInit, ViewChild } from "@angular/core";
import { Task } from "src/app/models/task";
import { TaskService } from 'src/app/services/task.service';
import { TodoToastrService } from 'src/app/services/todo-toastr.service';

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private todoToastrService: TodoToastrService
  ) {}

  task: string = '';

  ngOnInit(): void {}

  addTask() {
    const creationDate: Date = new Date();
    const todo: Task = {
      task: this.task,
      completed: false,
      creationDate: creationDate,
      modified: false,
    };
    this.taskService.addTask(todo);
    this.todoToastrService.successToast(todo.task, 'Saved !');
    this.task = '';
  }
}
