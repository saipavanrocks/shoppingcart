import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //first we have to store all products
  public products:any = [];
  public grandTotal:number = 0;
  constructor(private cartservice:CartServiceService) { }

  ngOnInit(): void {
    this.cartservice.getproduct()
    .subscribe(res=>{
      this.products = res;
      //for printing total price we are calling this method
      this.grandTotal = this.cartservice.gettotalprice();

    })
  }

  deleteitem(item:any){
    this.cartservice.removeitem(item);

  }

  emptycart(){
    this.cartservice.removeallcart();
  }

}
