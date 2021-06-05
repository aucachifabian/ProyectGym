import { Alumno } from "../alumno/alumno";
import { Plan } from "../plan/plan";

export class Pago {
    
    public plan     : Plan;

    //Efectivo - Targeta.
    public modo     : string;
    public fecha    : Date;
    public alumno   : Alumno;

    constructor(){
    }
}
