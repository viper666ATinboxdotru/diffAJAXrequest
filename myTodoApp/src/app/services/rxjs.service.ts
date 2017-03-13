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

}
