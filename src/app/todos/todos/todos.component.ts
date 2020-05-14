import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { Task } from "src/app/models/task";
import { TaskService } from 'src/app/services/task.service';
import { TodoToastrService } from 'src/app/services/todo-toastr.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/User';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit, OnDestroy {
  constructor(
    private taskService: TaskService,
    private todoToastrService: TodoToastrService,
    private authService:  AuthService
  ) {}

  user: User;

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  addTask(form: NgForm) {

    const task = form.value.task;
    const creationDate: Date = new Date();
    const todo: Task = {
      task: task.charAt(0).toUpperCase() + task.slice(1),
      completed: false,
      creationDate: creationDate,
      modified: false,
      user: this.user.email
    };
    this.taskService.addTask(todo);
    this.todoToastrService.successToast(todo.task, 'Saved !');
    form.resetForm();
  }

  ngOnDestroy(){
  }

}
