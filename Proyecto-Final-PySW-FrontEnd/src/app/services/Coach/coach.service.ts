import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  private urlBase: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  getCoach(): Observable<any> {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
    }
    return this.http.get(this.urlBase + "coach/", option)
  }




}
