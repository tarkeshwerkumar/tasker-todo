import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-message',
  template: `<section fxLayout="column" fxLayoutAlign="center center">
                <h3>{{ message }} !</h3>
                <button mat-button mat-dialog-close>Close</button>
             <section>`,
  styles : [
    'h3{color:green}'
  ]
})
export class SuccessMessageDialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public message:string){}
}
