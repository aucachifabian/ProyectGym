import { Component, OnInit } from '@angular/core';
import { Arrangement } from 'src/app/models/arrangement/arrangement';
import { Coach } from 'src/app/models/coach/coach';
import { Student } from 'src/app/models/student/student';
import { ArrangementService } from 'src/app/services/Arrangement/arrangement.service';
import { CoachService } from 'src/app/services/Coach/coach.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-pupil',
  templateUrl: './pupil.component.html',
  styleUrls: ['./pupil.component.css']
})
export class PupilComponent implements OnInit {

  public student: Student;

  Coach: Array<Coach>;
  coach: Coach;

  Arragement: Array<Arrangement>;
  arragement: Arrangement;

  //---------------------------------------------------------//

  constructor(private studentService: StudentService,
    private coachService: CoachService,
    private arrangementService: ArrangementService) {
    this.student = new Student();
    this.getCoach();
    this.getArragement();
  }

  //---------------------------------------------------------//

  ngOnInit(): void {
  }

  //---------------------------------------------------------//

  public registerStudent(): void {
    this.studentService.createStudent(this.student).subscribe(
      result => {
        if (result == "1") {
          alert("oks");
        }
      },
      error => {
        console.log(error);
        alert("oks");
      }
    );
  }

  public getCoach(): void {
    this.coachService.getCoach().subscribe(
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

  public getArragement(): void {
    this.arrangementService.getArragement().subscribe(
      result => {
        this.Arragement = new Array<Arrangement>();
        result.forEach(element => {
          this.arragement = new Arrangement();
          Object.assign(this.arragement, element);
          this.Arragement.push(this.arragement);
        });
        console.log(this.Arragement);
      },
      err => {
        console.log(err);
      }
    )
  }


  //---------------------------------------------------------//

}
