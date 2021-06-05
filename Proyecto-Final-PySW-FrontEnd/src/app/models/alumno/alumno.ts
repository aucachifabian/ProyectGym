import { Entrenador } from "../entrenador/entrenador";
import { Pago } from "../pago/pago";
import { Persona } from "../persona/persona";
import { Rutina } from "../rutina/rutina";

export class Alumno extends Persona{

    public tutor    : Entrenador;
    public rutinas  : Array<Rutina>;
    public contador : number;
    public ultimoPago     : Pago;
    
    constructor(){
        super();
    }
}
