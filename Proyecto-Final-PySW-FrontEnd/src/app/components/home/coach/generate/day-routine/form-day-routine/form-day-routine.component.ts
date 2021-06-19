import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Arrangement  } from 'src/app/models/arrangement/arrangement';
import { DayRoutine } from 'src/app/models/day_routine/day-routine';
import { Routine } from 'src/app/models/routine/routine';
import { ArrangementService } from 'src/app/services/arrangement/arrangement.service';
import { DayRoutineService } from 'src/app/services/day_routine/day-routine.service';
import { RoutineService } from 'src/app/services/routine/routine.service';

@Component({
  selector: 'app-form-day-routine',
  templateUrl: './form-day-routine.component.html',
  styleUrls: ['./form-day-routine.component.css']
})
export class FormDayRoutineComponent implements OnInit {

  public arrangement : Arrangement;
  public action : string;
  public arrangements: Array<Arrangement>;
  public form : boolean;
 public routines : Array<Routine>;
   public routineWork : DayRoutine;
  //------------------------------------------------------------//

  constructor(private arrangementService : ArrangementService,
              private toastr : ToastrService,
              private activateRoute : ActivatedRoute,
              private router : Router,
              private routineService : RoutineService,
              private dayRoutineService : DayRoutineService) { 
                this.arrangement = new Arrangement()
               this.form = false;
               this.getRoutines();
               this.getArragements();
              }

  //------------------------------------------------------------//

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => {
        this.routineWork = new DayRoutine();
        if(params.id != "new") {
          this.action = "edit";
          this.editDayRoutine(params.id);
        }
        else if (params.id == "new"){
          this.action = "new";
          this.routineWork = new DayRoutine();
          this.routineWork.routine = new Array<Routine>();
        }
      }
    );
  }

  public editDayRoutine(id)
  {
    this.dayRoutineService.getDayRoutine(id).subscribe(
      result => {
        Object.assign(this.routineWork, result);
      },

      error => {
        this.toastr.error("ERROR", "ERROR");
      }
    );
  }
  

  public saveDayRoutine(formRoutine : NgForm) : void {
    this.dayRoutineService.updateDayRoutine(this.routineWork).subscribe(
      result => {
        if(result.status == "1"){
          this.toastr.success("Success","Arrangement saved.");
          formRoutine.reset();
        
          this.returnDayRoutines();
        }
        else {
          this.toastr.error("Error", "Arrangement not saved.");
        }
      },

      error => {
        this.toastr.error("ERROR", "ERROR.");
      }
    );
  }

  //------------------------------------------------------------//

  public registerDayRoutine(formRoutine : NgForm) : void {
    this.dayRoutineService.createDayRoutine(this.routineWork).subscribe(
      result => {
        if(result.status == "1"){
          this.toastr.success("Success.","Arrangement Registered.");
          formRoutine.reset();
          this.routineWork = new DayRoutine();
        }
        else {
          this.toastr.error("Error.", "Arrangement not registerd.");
        }
      },
  
      error => {
        this.toastr.error("ERROR.","ERROR");
     }
    );
    this.routineWork = new DayRoutine();
  }
  
  //------------------------------------------------------------//
  
  public returnDayRoutines() : void {
    this.routineWork = new DayRoutine();
    this.action = "";

    this.router.navigate(["dayRoutine/"]);
  }
  
  //------------------------------------------------------------//
  public getArragements(): void {
    this.arrangements = new Array<Arrangement>();

    this.arrangementService.getArrangements().subscribe(
      result => {
        result.forEach(element => {
          let vArrangement : Arrangement = new Arrangement();

          Object.assign(vArrangement, element);

          this.arrangements.push(vArrangement);
        });
      },
      error => {
        console.log(error);
      }
    )
  }



  public getRoutines() : void {
    this.routines = new Array<Routine>();

    this.routineService.getRoutines().subscribe(
      result => {
        result.forEach(element => {
          let vRoutine : Routine = new Routine();

          Object.assign(vRoutine, element);

          this.routines.push(vRoutine);
        });
      },

      error => {
        this.toastr.error("ERROR","ERROR");
      }
    );
  }


  public addRoutine(name): void {
   this.routineWork.routine.push(name);
  }

  public deleteRoutine(a): void {
     this.routineWork.routine.splice(a,1);
   }

}
