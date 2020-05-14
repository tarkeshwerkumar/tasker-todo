import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  removeUndefinedValues(task: Task){
    if(task.addedAgain === undefined){
      delete task.addedAgain;
    }
    if(task.completeDate === undefined){
      delete task.completeDate;
    }
    if(task.modificationDate === undefined){
      delete task.modificationDate;
    }
    if(task.modified === undefined){
      delete task.modified;
    }
    if(task.addedAgainDate === undefined){
      delete task.addedAgainDate;
    }
    if(task.user === undefined){
      delete task.user;
    }
    return task;
  }

}
