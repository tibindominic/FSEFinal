import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../shared/service/app.service'
import { NgForm } from '@angular/forms';
import { Task } from '../shared/model/Task.model';
import { error } from 'util';
import { CommonService } from '../shared/service/common.service';
import { TasksFilter } from '../shared/pipe/filterTasks';


@Component({
    selector: 'view-task',
    templateUrl: './viewtask.component.html'
})
export class ViewTaskComponent implements OnInit {

    @ViewChild('searchForm') searchForm: NgForm;
    task: Task = new Task();

    constructor(private router: Router, private commonService: CommonService) {
    }

    ngOnInit() {
        this.getTask();
    }

    getTask() {
        this.commonService.getTasks();
    }

    editTask(task){
        this.commonService.task = task;
        this.commonService.currentTask = 'update';
        this.commonService.switchTab('add-tab');
    }
}
