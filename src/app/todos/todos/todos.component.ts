import { Component, OnInit, ViewChild } from "@angular/core";
import { Task } from "src/app/models/task";
import { MatDialog } from "@angular/material/dialog";
import { SuccessMessageDialogComponent } from "src/app/dialogs/success-message/success-message.component";
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private taskService: TaskService
  ) {}

  task: string = "";

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
    this.dialog.open(SuccessMessageDialogComponent, {
      data: "Task Added Successfully",
    });
    this.task = "";
  }
}
