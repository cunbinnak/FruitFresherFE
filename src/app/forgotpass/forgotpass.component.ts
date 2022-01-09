import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private userservice:UserserviceService, private _router:Router) { }

  ngOnInit(): void {
  }


  email:any;
  username:any;
  msg :string = "";
  gettoken:any;

  sendlink(){
    let data:FormData = new FormData();
    
    data.append('email',this.email);
    data.append('username', this.username);

    this.userservice.getlinkresetpass(data).subscribe(res =>{
      console.log(res);
    },(error:HttpErrorResponse)=>{
      console.log(error);
      this.gettoken= error.error.text;
      sessionStorage.setItem('tokenResetPass', this.gettoken);
    })
  }

}
