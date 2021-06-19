import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : User;
  private returnUrl : string;

  constructor(private route : ActivatedRoute,
              private router : Router, 
              private loginService : LoginService) {

    this.user = new User();
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Home';
  }

  public login() : void {
    this.loginService.login(this.user).subscribe(
      result => {
        var user = result;

        if (user.status == "1"){
          sessionStorage.setItem("token", user.token);
          sessionStorage.setItem("type_user", user.type_user);

          this.router.navigateByUrl(this.returnUrl);
        }
        else {
          alert("error");
        }
      },

      error => {
        console.log(error);
      }
    );
  }

}
