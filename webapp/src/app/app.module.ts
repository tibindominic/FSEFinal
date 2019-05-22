import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './addtask/addtask.component';
import { AppService } from './shared/service/app.service';
import { ViewTaskComponent } from './viewtask/viewtask.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './shared/service/common.service';
import { TasksFilter } from './shared/pipe/filterTasks';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from 'src/app/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    TasksFilter,
    AddProjectComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AppService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
