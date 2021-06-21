import { Component, OnInit } from '@angular/core';
import { Assistance } from 'src/app/models/assistance/assistance';
import { Student } from 'src/app/models/student/student';
import { AssistanceService } from 'src/app/services/assistance/assistance.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.css']
})
export class AssistanceComponent implements OnInit {

  public assistance : Assistance;

  public students : Array<Student>;

  //---------------------------------------------------------------------//

  constructor(private assistanceService : AssistanceService,
              private studentService : StudentService) {
    this.assistance = new Assistance();

    this.getStudents();
  }

  //---------------------------------------------------------------------//

  ngOnInit(): void {
  }

  //---------------------------------------------------------------------//

  public registerStudent() : void {
    this.assistanceService.createAssistance(this.assistance).subscribe(
      result => {
        if (result.status == "1"){
          alert("oks");
        }
      },

      error => {
        console.log(error);
      }
    );
  }

  //---------------------------------------------------------------------//

  public getStudents() : void {
    this.students    = new Array<Student>();
  
    this.studentService.getStudents().subscribe(
      result => {
        result.forEach(element => {
          let vStudent : Student = new Student();

          Object.assign(vStudent,element);

          this.students.push(vStudent);
        });
      },

      error => {
        console.log(error);
      }
    )
  }


  
}
