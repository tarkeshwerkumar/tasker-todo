import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Task } from "../models/task";
import { Subject } from "rxjs";
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: "root",
})
export class TaskService {

  //Subscriptions
  tasksChanged = new Subject<Task[]>();
  finishedTasksChanged = new Subject<Task[]>();

  completedTasksChanged = new Subject<Task[]>();

  private tasks: Task[];
  private finishedTasks: Task[];

  constructor(
    private db: AngularFirestore,
    private utilService: UtilsService,
    ) {}

    fetchTasksByUser(email: string) {
      this.db.collection('tasks', ref => ref.where('user', '==', email)).snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc) => {
            const values: any = doc.payload.doc.data();
            return {
              id: doc.payload.doc.id,
              task: values.task,
              completed: values.completed,
              creationDate: values.creationDate?.toDate(),
              addedAgain: values?.addedAgain,
              completeDate: values?.completeDate?.toDate(),
              modificationDate: values?.modificationDate?.toDate(),
              modified: values?.modified,
              addedAgainDate: values?.addedAgainDate?.toDate(),
              user: values?.user
            };
          });
        })
      )
      .subscribe((response: any[]) => {
        this.tasks = response;
        this.tasksChanged.next([...this.tasks]);
      });
    }

    fetchFinishedTasksByuser(email: string){
      this.db.collection('finishedTasks', ref => ref.where('user', '==', email)).snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc) => {
            const values: any = doc.payload.doc.data();
            return {
              id: doc.payload.doc.id,
              task: values.task,
              completed: values.completed,
              creationDate: values.creationDate?.toDate(),
              completeDate: values.completeDate?.toDate(),
              modificationDate: values?.modificationDate?.toDate(),
              modified: values?.modified,
              addedAgain: values?.addedAgain,
              addedAgainDate: values?.addedAgainDate?.toDate(),
              user: values?.user
            };
          });
        })
      )
      .subscribe((response: any[]) => {
        this.finishedTasks = response;
        this.finishedTasksChanged.next([...this.finishedTasks]);
      });
    }

  deleteFinishedTask(id: string){
    this.db.doc('finishedTasks/' + id).delete();
  }

  addTask(task: Task){
    this.db.collection('tasks').add(task);
  }

  updateTask(task: Task) {
    const taskId = task.id;
    delete task.id;
    this.utilService.removeUndefinedValues(task);
    task.modified= true;
    task.modificationDate = new Date();
    this.db.doc("tasks/" + taskId).update(task);
  }

  taskCompleted(task: Task){
    const taskId = task.id;
    delete task.id;
    this.utilService.removeUndefinedValues(task);
    task.completed = true;
    task.completeDate = new Date();
    this.db.collection('finishedTasks').add(task);
    this.db.doc('tasks/' + taskId).delete();
  }

  addTaskAgain(task: Task){
    const taskId = task.id;
    delete task.id;
    this.utilService.removeUndefinedValues(task);
    task.completed = false;
    task.addedAgain = true;
    task.addedAgainDate = new Date();
    this.db.collection('tasks').add(task);
    this.db.doc('finishedTasks/' + taskId).delete();
  }
}
