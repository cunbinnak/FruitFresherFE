import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/user';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {

  constructor(private userservice: UserserviceService, private activatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.tokenresetpass  = this.activatedRoute.snapshot.paramMap.get('token');
    console.log(this.tokenresetpass);
  }

  userChangepass = new user();
  repass:any;
  msg:string ="";
  tokenresetpass:any;
  changepass(){
    this.userChangepass.tokenforgotpass =this.tokenresetpass;
      this.userservice.changepassword(this.userChangepass).subscribe(res =>{
        this.msg ="Thay đổi mật khẩu thành công";
        this._router.navigate(['/login'])
      },(error:HttpErrorResponse)=>{
        var status = error.status;
        
        if(status =400){
          alert('Đã có lỗi xảy ra khi thay đổi mật khẩu, vui lòng thao tác lại');
          
        }
      })
  } 

  validatepass(repass:string){
    this.repass = repass;
    if(this.repass!=this.userChangepass.password){
      this.msg="Mật khẩu chưa khớp nhau!";
      
    }else{
      this.msg ="";
      
    }
  }

}
