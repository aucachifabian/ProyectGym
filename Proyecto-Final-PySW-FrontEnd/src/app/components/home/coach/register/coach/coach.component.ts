import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/models/coach/coach';
import { CoachService } from 'src/app/services/coach/coach.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {


  public coach: Coach;

  constructor(private CoachService: CoachService) {
    this.coach = new Coach();
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
  ngOnInit(): void {
  }

}
