import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arrangement } from 'src/app/models/arrangement/arrangement';
import { ArrangementService } from 'src/app/services/arrangement/arrangement.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public position1 : number = 0;
  public position2 : number = 1;
  public position3 : number = 2;

  public trainingCrt : boolean = false;
  public arrangements : Array<Arrangement>

  //---------------------------------------------------//

  constructor(
              private arrangementService : ArrangementService,
              private router : Router) {

    this.getArrangements();
  }

  //---------------------------------------------------//

  ngOnInit(): void {
  }

  //---------------------------------------------------//

  
  //---------------------------------------------------//

  public getArrangements() : void {
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
    );
  }

  //---------------------------------------------------//
  
  public agregarNoticia() : void {
    this.router.navigate(["Noticia/Form"])
  }

  //---------------------------------------------------//

    //---------------------------------------------------//

  public getLogin() : void {
    this.router.navigate(["login"]);
  }
}
