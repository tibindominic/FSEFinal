import { Injectable } from '@angular/core';
import { Task } from '../model/Task.model';
import { AppService } from './app.service';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/shared/model/project.model';

@Injectable()
export class CommonService {
    users: string[];

    currentTask: string = 'add';
    task: Task = new Task();
    project: Project = new Project();
    allTasks: Task[] = new Array<Task>();
    allProjects: Project[] = new Array<Project>();
    ngbTab: NgbTabset;

    constructor(private appService: AppService) { }

    addorUpdateTask(task: Task, action) {
        console.log('addorUpdateTask action:'+action, task);
        task.status = action !== 'end' ? 'active' : 'inactive';
        this.appService.addorUpdateTask(task).subscribe(res => {
            console.log('addorUpdateTask success', res);
            this.task = new Task(); 
            this.getTasks();
            if(action ==='update'){
               this.currentTask = 'add'; 
            }
        this.switchTab('view-task');
        }, error => {
            console.log('addorUpdateTask error', error);
        });
    }

    addorUpdateProject(project: Project, action) {
        console.log('addorUpdateTask action:'+action, project);
        project.status = action !== 'end' ? 'active' : 'inactive';
        this.appService.addorUpdateProject(project).subscribe(res => {
            console.log('addorUpdateProject success', res);
            this.project = new Project(); 
            this.getTasks();
        //     if(action ==='update'){
        //        this.currentTask = 'add'; 
        //     }
        // this.switchTab('view-task');
        }, error => {
            console.log('addorUpdateProject error', error);
        });
    }

    getTasks() {
        this.appService.getTasks().subscribe(data => {
            console.log(data);
            this.allTasks = <Task[]>data;
            console.log('getTasks success:', this.allTasks);
        }, error => {
            console.log('getTasks error');
        });
    }

    getUsers() {
        this.appService.getUsers().subscribe(data => {
            console.log(data);
            this.users = <string[]>data;
            console.log('getusers success:', this.users);
        }, error => {
            console.log('getusers error');
        });
    }

    getProjects() {
        this.appService.getProjects().subscribe(data => {
            console.log(data);
            this.allProjects = <Project[]>data;
            console.log('allProjects success:', this.allTasks);
        }, error => {
            console.log('allProjects error');
        });
    }

    switchTab(tab) {
        this.ngbTab.select(tab);
    }
}