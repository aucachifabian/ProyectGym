import { Usuario } from "../usuario/usuario";

export class Persona {

    public dni      : number;
    public eMail    : string;
    public nombre   : string;
    public celular  : number;
    public apellido : string;
    public domicilio        : string;
    public fechaInicio      : Date;
    public fechaNacimiento  : Date;

    public usuario : Usuario;

    constructor(){
    }
}
