import { Pago } from "../pago/pago";
import { Rutina } from "../rutina/rutina";
import { Usuario } from "../usuario/usuario";

export class Alumno {

    public dni  : string;

    //plan full(30d) - normal(5d), basico (3d).
    public plan : string

    public eMail    : string;
    public nombre   : string;
    public celular  : string;
    public apellido : string;
    public domicilio        : string;
    public fechaInicio      : Date;
    public fechaNacimiento  : Date;
   
    public pago     : Pago;
    public usuario  : Usuario;
    public rutinas  : Array<Rutina>;
    
    constructor(){
    }
}
