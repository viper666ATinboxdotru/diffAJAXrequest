import { TodoTask } from './../Entity/todo-task';
import { Injectable } from '@angular/core';

@Injectable()
export class PromiseService {

  constructor() { }

  getTaskList(): Promise<string> {
    debugger;
    return new Promise((resolve,reject)=>
      resolve("result from resolve")
    );
  }

  // getTaskList(): Promise<TodoTask[]> {
  //   debugger;
  //   return new Promise(function (resolve, reject) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState === 4) {
  //         //good
  //         if (xhr.status == 200) {
  //           // perfect!
  //           debugger;
  //           resolve(JSON.parse(this.response));
  //         } else {
  //           // there was a problem with the request,
  //           // for example the response may be a 404 (Not Found)
  //           // or 500 (Internal Server Error) response codes
  //           reject(this);
  //         }
  //       } else {
  //         //not ready
  //         reject(this);
  //       }
  //     }

  //   });
  // }

}
