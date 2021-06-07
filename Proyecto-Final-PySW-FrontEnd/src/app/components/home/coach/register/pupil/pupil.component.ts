import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student/student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-pupil',
  templateUrl: './pupil.component.html',
  styleUrls: ['./pupil.component.css']
})
export class PupilComponent implements OnInit {

  public student : Student;

  //---------------------------------------------------------//

  constructor(private studentService : StudentService) {
    this.student = new Student();
  }

  //---------------------------------------------------------//

  ngOnInit(): void {
  }

  //---------------------------------------------------------//

  public registerStudent() : void {
    this.studentService.createStudent(this.student).subscribe(
      result => {
        if(result == "1"){
          alert("oks");
        }
      },

      error => {
        console.log(error);
        alert("oks");
      }
    );
  }

  //---------------------------------------------------------//
  
}
