import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  /****************************************************/

  constructor(public loginService : LoginService, public router : Router) { 
  }
  /****************************************************/

  ngOnInit(): void {
  }

  /****************************************************/

  public logout() : void {
    this.loginService.logout();
  }

  /****************************************************/
}
