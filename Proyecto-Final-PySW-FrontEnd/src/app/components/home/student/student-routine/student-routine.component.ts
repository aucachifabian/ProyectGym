import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-student-routine',
  templateUrl: './student-routine.component.html',
  styleUrls: ['./student-routine.component.css']
})
export class StudentRoutineComponent implements OnInit {

  constructor(public loginService : LoginService) { }

  ngOnInit(): void {
  }

}
