import { Component, Inject, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit.dialog.component.html'
})
export class EditDialogComponent implements OnInit{

  task:string = "";
  error:boolean = false;

  constructor(
     private dialogRef: MatDialogRef<EditDialogComponent> ,
     @Inject(MAT_DIALOG_DATA) public todoData: Task,
     private taskService: TaskService
  ){}

  ngOnInit(){
    this.task = this.todoData.task;
  }

  onSave(){
    if(this.task === "")
    {
      this.error = true;
      return;
    }
    this.todoData.task = this.task;
    this.taskService.updateTask(this.todoData);
    this.dialogRef.close();
  }

}
