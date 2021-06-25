import { PostingService } from './../../../services/posting/posting.service';
import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-fb';
import { ApiMethod } from 'ngx-fb/dist/esm/providers/facebook';


@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {

  mensaje:string="";


  constructor( private postingService: PostingService, private fb:FacebookService) {
    this.iniciarFb();
   }

  ngOnInit(): void {
  }



  postFb(){
    var apiMethod: ApiMethod = "post";
    this.fb.api('106270701706001/feed', apiMethod,
    {
    "message": this.mensaje,
    "access_token":"EAACThNgGw0kBANzuc2ToKCencAZB6M3453XZCWo6ZBjAMQgCI7pYyHu5rPtyHDkEsFiXFqzmoPyWZCvrsnMYOnjytXwjANDnXaIIBFw0wZBmHIFpI0ZCzZCvADiEIruCgcM46QgY2AZBpiytPpt9YGgu25qvzBdbezguqY4wm7O2k5DpbEF5fSXjYo2Hp72J2rEByDSAxoCWWwZDZD"
    });


    }


    iniciarFb(){
    let initParams: InitParams = {
    appId: '162198769288009',
    autoLogAppEvents : true,
    xfbml : true,
    version : 'v7.0'
    };
    this.fb.init(initParams);
    }

  }
