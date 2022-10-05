import { CartServiceService } from './../service/cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchkey="";

  constructor(private cartservice:CartServiceService) { }
  public totalitem:number = 0;
  ngOnInit(): void {
    this.cartservice.getproduct()
    .subscribe(res=>{
       this.totalitem = res.length;
    })
  }

  searchtext(event:any){
    this.searchkey = (event.target as HTMLInputElement).value;
    console.log(this.searchkey);
    this.cartservice.search.next(this.searchkey);

  }

}
