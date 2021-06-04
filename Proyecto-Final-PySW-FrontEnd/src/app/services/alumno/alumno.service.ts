import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private urlBase : string = "http://localhost:3000/api/alumno/";

  //-----------------------------------------------------------//
  
  constructor(private http : HttpClient) {
  }

  //-----------------------------------------------------------//

  public createAlumno(alumno : Alumno) : Observable<any> {

    const optional = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }

    let body = JSON.stringify(alumno);

    return this.http.post(this.urlBase,body,optional);
  }

  //-----------------------------------------------------------//

}
