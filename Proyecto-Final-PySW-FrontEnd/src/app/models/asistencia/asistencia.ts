import { Alumno } from "../alumno/alumno";
import { Plan } from "../plan/plan";

export class Asistencia {

    public plan     : Plan;
    public alumnos  : Array<Alumno>;
    public fechaActual : Date;

    constructor(){
    }
}
