import { RxjsService } from './services/rxjs.service';
import { PromiseService } from './services/promise.service';
import { XhrServiceService } from './services/xhr-service.service';
import { MockTasksService } from './services/mock-tasks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MockTasksService,
    XhrServiceService,
    PromiseService,
    RxjsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
