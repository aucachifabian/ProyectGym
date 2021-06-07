import { Assistance } from "../assistance/assistance";
import { Student } from "../student/student";

export class StudentAssistence {

    public _id          : string;
    public id_student   : Student;
    public id_assistance	: Assistance;

    constructor(){
    }
}
