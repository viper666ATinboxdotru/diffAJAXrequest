import { RxjsService } from './../services/rxjs.service';
import { PromiseService } from './../services/promise.service';
import { XhrServiceService } from './../services/xhr-service.service';
import { MockTasksService } from './../services/mock-tasks.service';
import { MockTodoTasks } from './../Entity/mock-todo-tasks';
import { TodoTask } from './../Entity/todo-task';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {



  listTodoTasks: TodoTask[];
  someText: string;

  constructor(private mockTaskServ: MockTasksService,
    private xhrService: XhrServiceService,
    private promiseService: PromiseService,
    private rxJs: RxjsService
  ) { }
  getXHRR(xhttp: XMLHttpRequest) {
    //debugger;
    this.listTodoTasks = JSON.parse(xhttp.response);
  }

  procErr(xhttp: XMLHttpRequest) {
    console.log(xhttp.statusText);
  }



  getTaskList(): void {
    //get local mock data
    //this.listTodoTasks = MockTodoTasks;

    //get from service data
    // this.listTodoTasks = this.mockTaskServ.getTaskList();

    //get form ajax request passing anonymous functions
    // this.xhrService.getTaskList(function(xhttp: XMLHttpRequest){
    //   this.listTodoTasks = JSON.parse(xhttp.responseText);
    // }.bind(this),
    // function(xhttp: XMLHttpRequest){
    //   this.error = xhttp;
    // });
    // get form ajax request passing function name
    //debugger;
    // this.xhrService.getTaskList(this.getXHRR.bind(this), this.procErr.bind(this));

    // get form ajax request passing lambda function  
    // this.xhrService.getTaskList( 
    //     (xhr) => this.listTodoTasks = JSON.parse(xhr.responseText),
    //     (xhr) => {console.log(xhr.responseText)}
    // );


    //get PromiseService     
    // this.promiseService.getTaskList()    
    //   .then(
    //     response => {
    //        this.listTodoTasks = response
    //     },
    //     error => console.log(error)
    //   );

    //get from observables
    // this.rxJs.getTaskList().then((text) => alert(text) );
    var prom = this.rxJs.getTaskList();
    const source$ = Observable.fromPromise(prom);
    source$.subscribe(res => {
      this.listTodoTasks = res;
    });

  }

  //Adding new Task
  addTask(newTask: string) {
    this.xhrService.addNewTask(newTask, ()=>{
      this.getTaskList();
    });   
  }

  delTask(id: number) {    
    this.xhrService.deleteTask(id, ()=>{
      this.getTaskList();
    });
  }

  ngOnInit() {
    var prom = this.rxJs.getTaskList();
    const source$ = Observable.fromPromise(prom);
    source$.subscribe(res => {
      this.listTodoTasks = res;
    });
  }

}
