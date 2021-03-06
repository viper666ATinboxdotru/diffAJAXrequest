import { TodoTask } from './../Entity/todo-task';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RxjsService {

  constructor() { }

  getTaskList() {

    return new Promise<TodoTask[]>((resolve,reject)=>{

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
            
            resolve(JSON.parse(this.response));
          } else {
            var err = new Error(this.statusText);
            reject(err);
          }
        } 
      }

      xhr.open("GET", "http://adtodolistwebapi.azurewebsites.net/api/todo", true);
      xhr.send()
    });
  }

    addNewTask(taskText: string): Promise<TodoTask> {

    return new Promise((resolve, reject) => {

      var xhr = new XMLHttpRequest();
      var objToSend = { Name: taskText };
      var body = JSON.stringify(objToSend);

      xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
          //good

          if (xhr.status == 201) {
            resolve();
          }
          else
          {
            reject();
          }
        }

      }


      xhr.open("PUT", "http://adtodolistwebapi.azurewebsites.net/api/todo", true);
      // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(body);

    });
  }

    deleteTask(taskId: number): Promise<void>{
    return new Promise<void>((resolve,reject)=>{
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
      debugger;
      if (xhr.readyState === 4) {
        //good
        debugger;
        if (xhr.status == 204) {
         resolve();
        }
      }
    }

    xhr.open("DELETE", "http://adtodolistwebapi.azurewebsites.net/api/todo/" + taskId, true);
    xhr.send(null)
    });

  }

}
