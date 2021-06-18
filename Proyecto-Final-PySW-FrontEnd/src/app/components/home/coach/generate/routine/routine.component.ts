
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Routine } from 'src/app/models/routine/routine';
import { RoutineService } from 'src/app/services/routine/routine.service';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {


  routine :Routine = new Routine ();
  id:string;
  listRoutines:Array<Routine> = new Array<Routine>();


  constructor( private routineService:RoutineService,
              /// private ActivatedRoute:ActivatedRoute,
               private toastrService: ToastrService,
               private router:Router) {
                 this.cargarRoutines();
                 this.guardarRoutine();
               }

  ngOnInit(): void {
  }

  guardarRoutine(){
    this.routineService.saveRoutine(this.routine).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastrService.success("routine save");
          this.routine = new Routine();
        }
      },
      error=>{console.log(error)}
    )
  }


cargarRoutines(){

  this.routineService.getRoutines().subscribe(
    result=>{
      console.log(result);
      result.forEach(element => {
        let vRoutine=new Routine();
        Object.assign(vRoutine,element);
        this.listRoutines.push(vRoutine);


      });
    },
    error=>{
      console.log(error)
      alert("error en la peticion");

    }
  )

}


limpiarRoutine(){
  this.routine = new Routine();
 }

}
