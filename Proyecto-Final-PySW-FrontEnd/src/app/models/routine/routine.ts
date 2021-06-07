import { Arrangement } from "../arrangement/arrangement";

export class Routine {

    public _id      : string;
    public day 		: string;
    public repetition   : number;
    public description  : string;
    public arrangement  : Arrangement;

    constructor(){
    }
}
