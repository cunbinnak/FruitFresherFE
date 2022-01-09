import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from 'src/order';
import { orderdetail } from 'src/orderdetail';
import { OrderserviceService } from '../service/orderservice.service';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private orderservice:OrderserviceService, private userservice:UserserviceService, private _router:Router) { }

  


  ngOnInit(): void {


    if(this.username !=null){
      this._router.navigate(['/checkout'])
    }else{
      alert('Bạn chưa đăng nhập');
      this._router.navigate(['/login']);
    }
  }
  
 

  username:any = sessionStorage.getItem('username');
  order:order = new order();

  orderdetail:orderdetail = new orderdetail();
  user:any;
  
  ordersuccess:any ="";
  checkOrder:string ="";
  placeorder(){

      let cart = sessionStorage.getItem('cart')? JSON.parse(sessionStorage.getItem('cart') || ""):[];

      if(cart.length !=0){
        this.userservice.getuserbyname(this.username).subscribe(res => {
          this.user = res;
          // console.log(res);
        })
        // console.log(this.user);
        if(this.user!=null){
          this.orderdetail.productid = cart.item;
          this.orderdetail.quantity = cart.quantity;
          this.order.listDetail = cart;
          this.order.username = this.user;

          this.orderservice.createneworder(this.order).subscribe(response => {
            
            this.checkOrder = "orderok";
            this.ordersuccess ='Đặt hàng thành công';
              sessionStorage.removeItem('cart');
              this.delay(5000);
              this._router.navigate(['/home']);
          }, (er:HttpErrorResponse )=> {
            this.ordersuccess ='Đặt hàng không thành công vui lòng điền hết thông tin';
            this.checkOrder = "orderfailed";
          })
        }
      }else{
        alert ('Bạn không có sản phẩm nào trong giỏ hàng');
      }

    }


   delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
