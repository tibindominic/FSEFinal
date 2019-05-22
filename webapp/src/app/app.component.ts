import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from './shared/service/common.service';
import { Task } from './shared/model/Task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'webapp';
  @ViewChild('ngbTab') ngbTab: NgbTabset;

  constructor(private router: Router, private commonService: CommonService) { }

  ngAfterViewInit() {
    this.commonService.ngbTab = this.ngbTab;
    console.log('tab set:',this.commonService.ngbTab);    
  }
  tabClicked() {
    console.log('Tab clicked');
    this.commonService.currentTask = 'add'; 
    this.commonService.task= new Task();
  }
}
