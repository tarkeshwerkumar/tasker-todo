import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Food{
  value:string,
  viewValue:String
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foods: Food[] = [
    {value:'streak-0', viewValue:'Steak'},
    {value:'pizza-1', viewValue:'Pizza'},
    {value:'tacos-2', viewValue:'Tacos'},
  ];

  onSubmit(form:NgForm){
    console.log(form.value);

  }

}
