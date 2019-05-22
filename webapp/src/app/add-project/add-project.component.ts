import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/model/Task.model';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs/operators';
import { User } from 'src/app/shared/model/User.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  tasks: Task[];
  @ViewChild('addProjectForm') addProjectForm: NgForm;
  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  formatter = (result: string) => result.toUpperCase();

  constructor(private router: Router, private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getProjects();
    this.commonService.getUsers();
  }

  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term === '' ? []
      : this.commonService.users.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  addorUpdateProject = (action) => {
    this.commonService.project.enDate = ('0' + this.addProjectForm.value.dp2.year).slice(-4) + '-' + ('0' + this.addProjectForm.value.dp2.month).slice(-2) + '-' + ('0' + this.addProjectForm.value.dp2.day).slice(-2);
    this.commonService.project.stDate = ('0' + this.addProjectForm.value.dp.year).slice(-4) + '-' + ('0' + this.addProjectForm.value.dp.month).slice(-2) + '-' + ('0' + this.addProjectForm.value.dp.day).slice(-2);
    this.commonService.addorUpdateProject(this.commonService.project, action);

  }

  reset() {
    this.commonService.task.priority = 1;
  }

  setPaarentTask(e) {
    this.commonService.task.parentTask = e.target.value;
    console.log(this.commonService.task.parentTask);
  }

}
