export interface Todo {
  id: number;
  task: string;
  completed: boolean;
  creationDate: Date;
  modified?: 'yes' | 'no' | null;
  completeDate?: Date;
  modificationDate?: Date;
  addedAgain?: 'yes' | 'no' | null;
}
