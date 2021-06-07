import { Arrangement } from "../arrangement/arrangement";
import { Student } from "../student/student";

export class Assistance {
    
    public _id      : string;
    public day	    : Date;
    public student	: Array<Student>;
    public Arrangement : Arrangement;

    constructor(){
    }
}
