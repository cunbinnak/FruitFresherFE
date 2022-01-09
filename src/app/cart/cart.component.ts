import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyloadService } from '../service/lazyloadservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private lazyload:LazyloadService, private _router:Router) { }

  ngOnInit(): void {
    this.lazyload.loadScript('./assets/js/main.js').subscribe();
    this.getlistCartItem();
    this.total();
  }




  listCartItem:any[]=[];
  getlistCartItem(){
    this.listCartItem = sessionStorage.getItem('cart')? JSON.parse(sessionStorage.getItem('cart')||"") :[];
    console.log(this.listCartItem);
  }


  calculatorsubtotal(){
    sessionStorage.setItem('cart', JSON.stringify(this.listCartItem));
  }

  deletecart(index:number){
    this.listCartItem.splice(index,1);
    sessionStorage.setItem('cart', JSON.stringify(this.listCartItem));
  }

  total():number{
      let total:number=0;

      this.listCartItem.forEach( e =>{
        total +=(e.productid.price)*(e.quantity);
      })
      
    return total;
  }

  username:any;
  checkUser:boolean = false;
  msg:string="";
  checkUserLogin(){

    this.username = sessionStorage.getItem('username');
    if(this.username==null){
      this.msg ="Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục thanh toán!";
      this.checkUser = true;
    }else if(this.username!=null && this.listCartItem.length!=0){
      this._router.navigate(['/checkout']);
    }
  }

}
