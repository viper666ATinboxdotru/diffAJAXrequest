import { XhrServiceService } from './../services/xhr-service.service';
import { MockTasksService } from './../services/mock-tasks.service';
import { MockTodoTasks } from './../Entity/mock-todo-tasks';
import { TodoTask } from './../Entity/todo-task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  listTodoTasks: TodoTask[];

  constructor(private mockTaskServ: MockTasksService,
              private xhrService: XhrServiceService
              ) { }
  getXHRR(xhttp: XMLHttpRequest){
    debugger;
    this.listTodoTasks = JSON.parse(xhttp.response);
  }

  procErr(xhttp: XMLHttpRequest){
    console.log(xhttp.statusText);
  }

  

  getTaskList(): void{
    //get local mock data
    //this.listTodoTasks = MockTodoTasks;

    //get from service data
    // this.listTodoTasks = this.mockTaskServ.getTaskList();

    //get form ajax request
    // this.xhrService.getTaskList(function(xhttp: XMLHttpRequest){
    //   this.listTodoTasks = JSON.parse(xhttp.responseText);
    // }.bind(this));
    debugger;
    this.xhrService.getTaskList(this.getXHRR.bind(this), this.procErr.bind(this));
  }

  ngOnInit() {
  }

}
