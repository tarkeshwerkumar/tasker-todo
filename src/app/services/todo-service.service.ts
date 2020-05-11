import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: "root",
})
export class TodoServiceService {
  todos: Todo[] = [
    { id: 1, task: "Buy toothpaste", completed: false , creationDate: new Date(), completeDate: null},
    { id: 2, task: "Clean kitchen", completed: false , creationDate: new Date(), completeDate: null},
    { id: 3, task: "Change APIs Authorization", completed: false , creationDate: new Date(), completeDate: null},
    { id: 4, task: "Test OTA Synchronization", completed: false , creationDate: new Date(), completeDate: null},
    { id: 5, task: "Buy Grociries from Ondoor", completed: false , creationDate: new Date(), completeDate: null},
  ];
  completedTasks:Todo[] = [];

  constructor(private utilsSevice: UtilsService) {}


  editTask(editedTodo: Todo){
    const index = this.getTaskIndex(this.todos, editedTodo.id);
    if(index >=0 ){
      let todo:Todo = this.todos[index];
      todo.task = editedTodo.task;
    }
  }

  addTask(todo:Todo){
    this.todos.push(todo);
  }

  addAgain(id:number){
    const index = this.getTaskIndex(this.completedTasks, id);
    if(index >=0 ){
      let todo:Todo = this.completedTasks[index];
      todo.completed = false;
      todo.creationDate = new Date();
      this.todos.push(todo);
      this.completedTasks = this.completedTasks.filter(todo => todo.id !== id);
      return this.completedTasks;
    }
  }

  deleteTask(id:number){
    this.completedTasks = this.completedTasks.filter(todo => todo.id !== id);
    return this.completedTasks;
  }

  getAllTodos() {
    return this.todos;
  }

  taskCompleted(id:number){
    const index: number = this.getTaskIndex(this.todos, id);
    if ( index >= 0 )
    {
      let todo:Todo = this.todos[index];
      todo.completed = true;
      todo.completeDate = new Date();
      this.completedTasks.push(todo);
      this.todos = this.todos.filter(todo => todo.id !== id);
      return this.todos;
    }
    return null;
  }

  getTaskIndex(tasks:Todo[], id:number)
  {
    for(let i = 0 ;i < tasks.length; i++)
    {
      if( tasks[i].id === id)
      {
        return i;
      }
    }
    return null;
  }

  getAllCompletedTasks()
  {
    console.log("hello 2");

    return this.completedTasks;
  }
}
