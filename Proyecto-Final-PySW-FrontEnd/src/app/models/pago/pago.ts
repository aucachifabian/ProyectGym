export class Pago {
    
    //plan full(30d) - normal(5d), basico (3d).
    public plan     : string;

    //Efectivo - Targeta.
    public modo     : string;

    public monto    : string;
    public fecha    : Date;

    constructor(){
    }
}
