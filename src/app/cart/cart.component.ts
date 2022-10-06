import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalitems:any = 1;



  //first we have to store all products
  public products:any = [];
  //used for printing total price
  public grandTotal:any;
  constructor(private cartservice:CartServiceService) { }

  ngOnInit(): void {
    this.cartservice.getproduct()
    .subscribe(res=>{
      this.products = res;

      //for printing total price we are calling this method
      this.grandTotal = this.cartservice.gettotalprice();

    })


  }

  //deleting products
  deleteitem(item:any){
    this.cartservice.removeitem(item);

  }

  //Removing entire cart items
  emptycart(){
    this.cartservice.removeallcart();
  }

  //for increasing quantity os products
  incr(item:any){
    if(item.quantity != 7){
      item.quantity =  item.quantity + 1
    }
    else{
      alert("we contain only this many products.Sorry for inconvience")
    }
    this.grandTotal = this.cartservice.gettotalprice();

  }

  //For decreasing quantity of products
  decr(item:any){

    if(item.quantity!=0){
      item.quantity =  item.quantity - 1
    }
    else{
      alert("You should have atleast one product");
   }

   this.grandTotal = this.cartservice.gettotalprice();

  }



}
