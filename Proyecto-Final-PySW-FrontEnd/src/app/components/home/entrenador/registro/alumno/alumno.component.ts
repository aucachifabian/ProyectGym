import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno/alumno';
import { AlumnoService } from 'src/app/services/alumno/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  public alumno : Alumno;

  constructor(private alumnoService : AlumnoService,
              private router : Router) {
    this.alumno = new Alumno();
    
  }

  ngOnInit(): void {
  }

  public guardarAlumno() : void {
    
    this.alumnoService.createAlumno(this.alumno).subscribe(
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
}
