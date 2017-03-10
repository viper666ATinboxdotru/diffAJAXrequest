import { MockTodoTasks } from './../Entity/mock-todo-tasks';
import { TodoTask } from './../Entity/todo-task';
import { Injectable } from '@angular/core';

@Injectable()
export class MockTasksService {

  constructor() { }

  getTaskList(): TodoTask[]{
    return MockTodoTasks;
  }

}
