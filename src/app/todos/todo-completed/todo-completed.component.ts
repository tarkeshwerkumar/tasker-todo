import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoServiceService } from "src/app/services/todo-service.service";
import { MatDialog } from "@angular/material/dialog";
import { DetailsDialogComponent } from "../todo-tasks/details.component";
import { AlertDialogComponent } from "src/app/dialogs/alert/alert.dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SuccessMessageDialogComponent } from "src/app/dialogs/success-message/success-message.component";
import { Task } from "src/app/models/task";
import { TaskService } from "src/app/services/task.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-todo-completed",
  templateUrl: "./todo-completed.component.html",
  styleUrls: ["./todo-completed.component.css"],
})
export class TodoCompletedComponent implements OnInit {
  // Subscriptions
  tasksSubscription: Subscription;

  completedTodos: Todo[];

  completedTasks: Task[];

  constructor(
    private todoService: TodoServiceService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskService.fetchFinishedTasks();
    this.tasksSubscription = this.taskService.finishedTasksChanged.subscribe(
      (response) => {
        this.completedTasks = response;
      }
    );
  }

  showDetails(todo: Todo) {
    this.dialog.open(DetailsDialogComponent, {
      data: todo,
    });
  }

  addAgain(task: Task) {
    this.taskService.addTaskAgain(task);
    this.dialog.open(SuccessMessageDialogComponent, {
      data: "Task Added Again ",
    });
  }

  deleteTask(task: Task) {
    const dialogRef = this.dialog.open(AlertDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.deleteFinishedTask(task.id);
        this.snackbar.open(task.task, "Deleted", { duration: 2000 });
      }
    });
  }
}
