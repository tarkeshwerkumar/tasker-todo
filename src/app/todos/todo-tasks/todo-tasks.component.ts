import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from './details.component';
import { EditDialogComponent } from 'src/app/dialogs/edit/edit.dialog.component';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Subscription } from 'rxjs';
import { TodoToastrService } from 'src/app/services/todo-toastr.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit, OnDestroy {

  //Subscriptions
  taskSubscription:Subscription;

  tasks: Task[];
  user: User;
  showLoading:boolean = true;

  constructor(
    private dialog:MatDialog,
    private taskService: TaskService,
    private todoToastrService: TodoToastrService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.taskService.fetchTasksByUser(this.user.email);
    this.taskSubscription = this.taskService.tasksChanged.subscribe(result =>{
        this.tasks = result;
        this.showLoading = false;
    });
  }

  ngOnDestroy(){
    this.taskSubscription.unsubscribe();
  }

  taskCompleted(task:Task)
  {
     this.taskService.taskCompleted(task);
     this.todoToastrService.successToast(task.task, 'Completed !');
    }

  showDetails(todo:Task){
    this.dialog.open(DetailsDialogComponent,{
      data:todo
    });
  }
  editTask(todo:Task){
    this.dialog.open(EditDialogComponent, {data: todo});
  }

}
