import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'src/app/models/coach/coach';
import { CoachService } from 'src/app/services/coach/coach.service';

@Component({
  selector: 'app-coach-table',
  templateUrl: './coach-table.component.html',
  styleUrls: ['./coach-table.component.css']
})
export class CoachTableComponent implements OnInit {


  Coach: Array<Coach>
  coach: Coach

  constructor(private CoachService : CoachService,
    private router: Router) {
    this. getCoachs()
   }

   getCoachs() {
    this.CoachService.getCoachs().subscribe(
      result => {
        this.Coach = new Array<Coach>();
        result.forEach(element => {
          this.coach = new Coach();
          Object.assign(this.coach, element);
          this.Coach.push(this.coach);
        });
        console.log(this.Coach);
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteCoach(id) {
    this.CoachService.deleteCoach(id).subscribe(
      result => {
        window.location.reload();
        console.log(result)
      },
      err => {
        console.log(err);
      }
    )
  }

  updateCoach(coach : Coach) {
    this.router.navigate(["coach/", coach._id])
  }

  ngOnInit(): void {
  }

}
