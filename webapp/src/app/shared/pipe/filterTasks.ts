import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/Task.model';

@Pipe({ name: 'taskFilter' })
export class TasksFilter implements PipeTransform {
    transform(tasks: Task[], taskName: String, parentTask:String, priority, priorityMax): any[] {
        console.log(tasks,taskName);        
        return tasks.filter((x: Task) => {
        if(taskName){
        return x.name.toLowerCase().startsWith(taskName.toLowerCase())
        } else {
            return true
        }
    })
    }
}