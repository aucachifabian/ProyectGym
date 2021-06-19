import { Component, OnInit } from '@angular/core';
import { Arrangement } from 'src/app/models/arrangement/arrangement';
import { Student } from 'src/app/models/student/student';
import { ArrangementService } from 'src/app/services/arrangement/arrangement.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public student: Student; 
  public arrangements: Array<Arrangement>;

  //---------------------------------------------------------//

  constructor(private studentService : StudentService,
              private arrangementService : ArrangementService) {

    this.student = new Student();
    this.getArragements();
  }

  //---------------------------------------------------------//

  ngOnInit(): void {
  }

  //---------------------------------------------------------//

  public registerStudent(): void {

    this.student.end_date = new Date(1999,0);
    this.student.amount_day = 0;

    this.studentService.createStudent(this.student).subscribe(
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
    );
  }

  //---------------------------------------------------------//

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

  //---------------------------------------------------------//

}
