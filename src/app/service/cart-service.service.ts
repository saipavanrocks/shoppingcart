import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//For behavior subject go through the below link
//https://dev.to/dipteekhd/angular-behaviorsubject-p1#:~:text=BehaviorSubject%20is%20both%20observer%20and,method%20or%20initial%2Fdefault%20value.
export class CartServiceService {

  constructor() { }
  public cartitemslist:any = [];
  public productslist = new BehaviorSubject<any>([]);

  //To send search value from header to products we are creating search behaviour
  public search = new BehaviorSubject('');

  // We are using get products as both observer and observable
  getproduct(){
    return this.productslist.asObservable();
  }

  setproduct(product:any){
    this.productslist.next(product)
  }

  addtocart(product:any){
    this.cartitemslist.push(product);
    //next means emitting data who will subscribe to this one
    this.productslist.next(this.cartitemslist);
    this.gettotalprice();
    //console.log(this.cartitemslist)
  }

  //for printing total cart price amount
  gettotalprice():number{
    let grandtotal = 0;
    this.cartitemslist.map((a:any)=>{
      grandtotal += a.price

    })
    return grandtotal
  }

  removeitem(product:any){
    this.cartitemslist.map((a:any,index:any)=>{
      if(a.id === product.id){
          //using splice method to remove item from array
          this.cartitemslist.splice(index, 1)
      }
    })

    //whenver we are removing the items we should update the cartnumber
    this.productslist.next(this.cartitemslist);
  }

  removeallcart(){
    this.cartitemslist = [];
    this.productslist.next(this.cartitemslist);

    //whenver we are removing the items we should update the cartnumber

    this.productslist.next(this.cartitemslist);
  }

}
