import { Component, OnInit } from '@angular/core';
import { LazyloadService } from '../service/lazyloadservice.service';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private lazyload:LazyloadService, private productservice:ProductserviceService) { }

  ngOnInit(): void {

    this.lazyload.loadScript('./assets/js/main.js').subscribe();
    this.getlistproduct();
  }


  listProduct:any[] =[];
  page=1;
  count=0;
  pagesize=8;

  getParams(page:number, pagesize:number):any{
    let params:any=[];
    if(page){
      params[`page`] = page-1;
    }
    if(pagesize){
      params[`pagesize`] = pagesize;
    }
    return params;
}

  getlistproduct(){
    let params = this.getParams(this.page, this.pagesize);

    this.productservice.getlistProduct(params).subscribe(res => {
      const {listProducts, totalItem} = res;
      this.listProduct = listProducts;
      this.count = totalItem;
     
      
    })
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getlistproduct();

  }

  // @Output() addtoCart:EventEmitter<any> = new EventEmitter<any>();
  numberItem:number =0;
  buyproduct(pro:any){
    let carts = sessionStorage.getItem('cart')?JSON.parse(sessionStorage.getItem('cart') || ""): [];

    //check item trong session
    const itemCart={
      productid:pro,
      quantity:1
    }
    let check = false;
    carts = carts.map( (x:{productid:any, quantity:1;}) => {
        if(x.productid.productid==pro.productid){
            x.quantity +=1;
            check = true;
        }
        return x;
    })
    if(!check){
      carts.push(itemCart);
      this.numberItem++;
    }
    sessionStorage.setItem('cart', JSON.stringify(carts));
   
    // this.addtoCart.emit();
    
  }
}
