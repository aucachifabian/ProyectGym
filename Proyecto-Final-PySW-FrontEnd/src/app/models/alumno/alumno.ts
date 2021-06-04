import { Pago } from "../pago/pago";

export class Alumno {

    public dni  : string;

    //plan full(30d) - normal(5d), basico (3d).
    public pago     : Pago;

    public eMail    : string;
    public nombre   : string;
    public celular  : string;
    public apellido : string;
    public domicilio        : string;
    public fechaInicio      : Date;
    public fechaNacimiento  : Date;
   
    
    constructor(){
    }
}
