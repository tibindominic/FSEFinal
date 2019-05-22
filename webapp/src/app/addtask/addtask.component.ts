import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Task } from '../shared/model/Task.model';
import { NgbDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../shared/service/common.service';

@Component({
    selector: 'add-task',
    templateUrl: './addtask.component.html'
})
export class AddTaskComponent {

    @ViewChild('addForm') addForm: NgForm;
    tasks: Task[];
    model:any;
    model2:any;

    constructor(private router: Router, private commonService: CommonService) {
    }

    ngOnInit() {
         this.commonService.getTasks();         
    }

    private addorUpdateTask = (action) => {
        this.commonService.task.enDate = ('0' + this.addForm.value.dp2.year).slice(-4)+'-'+('0' + this.addForm.value.dp2.month).slice(-2)+'-'+('0' + this.addForm.value.dp2.day).slice(-2);
        this.commonService.task.stDate = ('0' + this.addForm.value.dp.year).slice(-4)+'-'+('0' + this.addForm.value.dp.month).slice(-2)+'-'+('0' + this.addForm.value.dp.day).slice(-2);
        this.commonService.task.status = 'active';
        console.log(action+' task:',this.commonService.task);        
        this.commonService.addorUpdateTask(this.commonService.task,action);

    }

    reset() {
        this.commonService.task.priority = 1;
    }
    
    setPaarentTask(e) {
        this.commonService.task.parentTask = e.target.value;
        console.log(this.commonService.task.parentTask);        
    }

}
