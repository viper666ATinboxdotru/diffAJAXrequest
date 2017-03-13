import { TodoTask } from './../Entity/todo-task';
import { Injectable } from '@angular/core';

@Injectable()
export class PromiseService {

  constructor() { }

  getTaskList(): Promise<TodoTask[]> {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://adtodolistwebapi.azurewebsites.net/api/todo", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
            debugger;
            resolve(JSON.parse(this.response));
          } else {
            var err = new Error(this.statusText);
            reject(err);
          }
        } 
      }

      // xhr.onerror = function(){
      //   reject(err);
      // }

      xhr.send();
    });
  }

}
