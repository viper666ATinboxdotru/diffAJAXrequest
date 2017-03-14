import { TodoTask } from './../Entity/todo-task';
import { Injectable } from '@angular/core';

@Injectable()
export class XhrServiceService {

  constructor() {

  }

  getTaskList(onSuccess: Function, onError: Function): void {
    //debugger;
    var todoTaskList: TodoTask[];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //good
        if (xhr.status == 200) {
          // perfect!
          onSuccess(this);
        } else {
          // there was a problem with the request,
          // for example the response may be a 404 (Not Found)
          // or 500 (Internal Server Error) response codes
          onError(this);
        }
      } else {
        //not ready
        onError(this);
      }

    }

    xhr.open("GET", "http://adtodolistwebapi.azurewebsites.net/api/todo", true);
    xhr.send(null);
  }

  addNewTask(taskText: string, callback: Function) {

    var xhr = new XMLHttpRequest();

    // var body = "Name=" + encodeURIComponent(taskText);
    var objToSend = { Name: taskText };

    var body = JSON.stringify(objToSend);

    xhr.onreadystatechange = function () {

      if (xhr.readyState === 4) {
        //good

        if (xhr.status == 201) {
          callback();
        }
      }

    }

    xhr.open("PUT", "http://adtodolistwebapi.azurewebsites.net/api/todo", true);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(body);

  }

  deleteTask(taskId: number, callback: Function) {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      debugger;
      if (xhr.readyState === 4) {
        //good
        debugger;
        if (xhr.status == 204) {
          callback();
        }
      }
    }

    xhr.open("DELETE", "http://adtodolistwebapi.azurewebsites.net/api/todo/" + taskId, true);
    xhr.send(null)
  }

}



