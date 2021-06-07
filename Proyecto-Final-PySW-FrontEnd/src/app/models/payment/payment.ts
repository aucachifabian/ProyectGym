import { Arrangement } from "../arrangement/arrangement";
import { Student } from "../student/student";

export class Payment {
    
    public _id      : string;
    public pay_day 	: Date;
    public student 	: Student;
    public pay_mode : string;
    public arrangement  : Arrangement;

    constructor(){
    }
}
