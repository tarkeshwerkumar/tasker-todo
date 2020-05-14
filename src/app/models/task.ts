export interface Task {
  id?: string;
  task?: string;
  completed?: boolean;
  creationDate?: Date;
  modified?: boolean;
  completeDate?: Date;
  modificationDate?: Date;
  addedAgain?: boolean;
  addedAgainDate?: Date;
  user?: string;
}
