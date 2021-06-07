import { Arrangement } from "../arrangement/arrangement";
import { Coach } from "../coach/coach";

export class Student {
    
    public _id      : string;
    public surname  : string;
    public name     : string;
    public dni 	    : number;
    public phone 	: number;
    public address  : string;
    public email 	: string;
    public coach	: Coach;
    public birth_date 	: Date;
    public start_date 	: Date;
    public end_date 	: Date;
    public arrangement  : Arrangement;

    constructor(){
    }
}
