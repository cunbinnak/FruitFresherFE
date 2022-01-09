import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }


  ngOnInit(): void {
   this.getNameUser();
    
    
  }
  
  getNameUser(){
    this.username = sessionStorage.getItem('username');
    
    if(this.username !=null && this.username!=undefined){
      this.roles = sessionStorage.getItem('roles');
      this.SignIn = false;
      if(this.roles == this.role){
        this.adminlink = true;
      }


    }
    
  }
  

  SignIn:boolean = true;
  username:any 
  roles:any;
  role:any = [Role.Admin];
  adminlink:boolean = false;
  @Input() numberItem:number =0;

  signout(){
    sessionStorage.clear();
    this.SignIn = true;
    this.adminlink = false;
    this._router.navigate(['/home']);
    
  }

}
