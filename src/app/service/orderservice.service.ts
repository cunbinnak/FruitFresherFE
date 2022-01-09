import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from 'src/order';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private http:HttpClient) { }

  createneworder(neworder:order){
    return this.http.post('http://3.0.19.157:8080/admin/api/v1/order',neworder);
  }

  getlistOrder(){
    return this.http.get('http://3.0.19.157:8080/admin/api/v1/orders');
  }

  updateOrder(updateOrder:order){
    return this.http.put('http://3.0.19.157:8080/admin/api/v1/order', updateOrder);
  }

  deleteOrder(orderid:number){
    return this.http.delete('http://3.0.19.157:8080/admin/api/v1/order/'+orderid);
  }
}
