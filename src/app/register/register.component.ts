import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/user';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
  }

  newUser:user = new user();
  msg:string ="";

  register(){
    this.userservice.register(this.newUser).subscribe(res => {
       if(res !=null){
        this.msg = "Register Success!";
       }
        
    },(err:HttpErrorResponse)=> {
      this.msg = "Đã có lỗi xảy ra, vui lòng đăng kí lại sau!"; 
    })
  }

}
