import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Task } from '../model/Task.model';
import { AppConstants } from '../constants/app.constant';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Project } from "src/app/shared/model/project.model";

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(AppConstants.getTaskUrl).pipe(
            catchError(this.handleError)
        );
    }
    
    getUsers(): Observable<string[]> {
        return this.http.get<string[]>(AppConstants.getUsersUrl).pipe(
            catchError(this.handleError)
        );
    }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(AppConstants.getProjectsUrl).pipe(
            catchError(this.handleError)
        );
    }

    addorUpdateTask(task: Task): Observable<Task> {
        return this.http.post<Task>(AppConstants.addOrUpdateUrl, task)
            .pipe(
                catchError(this.handleError)
            );
    }

    addorUpdateProject(project: Project): Observable<Task> {
        return this.http.post<Project>(AppConstants.addorUpdateProjectUrl, project)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };

    getFormttedDate(date) {
return 
    }

}