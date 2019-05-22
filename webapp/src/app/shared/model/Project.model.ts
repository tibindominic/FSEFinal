import { User } from "src/app/shared/model/User.model";

export class Project{
    public name?:string="";
    public priority?:number=1;
    public manager?:User;
    public isDatesRequired?:boolean=false;
    public stDate?:string;
    public enDate?:string;
    public status?:string;
    public noOfTasks?:string;
}