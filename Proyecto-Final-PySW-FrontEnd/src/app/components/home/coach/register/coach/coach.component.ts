import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coach } from 'src/app/models/coach/coach';
import { CoachService } from 'src/app/services/coach/coach.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {


  public coach: Coach;
  accion: string = "new"


  constructor(private CoachService: CoachService,
    private activateRoute: ActivatedRoute) {
    this.coach = new Coach();
    this.activateRoute.params.subscribe(
      params => {
        this.getCoach(params.id);
      },
      err => {
      }
    )

  }

  createCoach() {
    this.CoachService.createCoach(this.coach).subscribe(
      result => {
        if (result == "1") {
          alert("oks");
        }
        else
          alert(result.msg);
      },
      error => {
        console.log(error);
        alert("oks");
      }
    )
  }

  updateCoach() {
    this.CoachService.updateCoach(this.coach).subscribe(
      result => {
        if (result == "1") {
          alert("oks");
        }
        else
          alert(result.msg);
      },
      error => {
        console.log(error);
        alert("oks");
      }
    )
  }

  getCoach(id: string) {
    this.CoachService.getCoach(id).subscribe(
      result => {
        this.accion = "update"
        Object.assign(this.coach, result);
      },
      err => {
      }
    )
  }

  ngOnInit(): void {
  }

}
