import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoServiceService } from "src/app/services/todo-service.service";
import { MatDialog } from "@angular/material/dialog";
import { DetailsDialogComponent } from "../todo-tasks/details.component";
import { AlertDialogComponent } from "src/app/dialogs/alert/alert.dialog.component";
import { Task } from "src/app/models/task";
import { TaskService } from "src/app/services/task.service";
import { Subscription } from "rxjs";
import { TodoToastrService } from 'src/app/services/todo-toastr.service';

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
    private taskService: TaskService,
    private todoToastrService: TodoToastrService
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
    this.todoToastrService.successToast(task.task, "Added !");
  }

  deleteTask(task: Task) {
    const dialogRef = this.dialog.open(AlertDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.deleteFinishedTask(task.id);
        this.todoToastrService.warningToast(task.task, "Deleted !");
      }
    });
  }
}
