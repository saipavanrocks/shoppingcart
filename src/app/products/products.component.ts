import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  searchText = '';
  public filtercategory:any;
  productlist:any;

  constructor(private api:ApiService, private cartservice:CartServiceService) { }

  ngOnInit(): void {
    this.api.getproducts().subscribe((res)=>{
      this.productlist = res;
      //we are assigning filter category to response because we are displaying the items based on this and using near ngfor
      this.filtercategory = res;

      this.productlist.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a, {quantity:1, total:a.price})

      });

    })

    this.cartservice.search.subscribe((value:any)=>{
      this.searchText = value;
    })
  }

  addtocart(item:any){
    this.cartservice.addtocart(item);

  }

  filter(category:string){
    this.filtercategory = this.productlist
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
