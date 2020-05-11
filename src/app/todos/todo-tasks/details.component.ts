import { Component, Inject } from '@angular/core';
import { Task } from 'src/app/models/task';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog-component.html'
})
export class DetailsDialogComponent{

  constructor(private dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todoData:Task){}

  onClose(){
    this.dialogRef.close();
  }

}
