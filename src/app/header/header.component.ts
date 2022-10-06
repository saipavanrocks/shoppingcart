import { CartServiceService } from './../service/cart-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchkey="";

   productform!:FormGroup;
  constructor(private cartservice:CartServiceService, private fb:FormBuilder, private apiservice:ApiService) { }
  public totalitem:number = 0;
  ngOnInit(): void {
    this.cartservice.getproduct()
    .subscribe(res=>{
       this.totalitem = res.length;
    })

    this.productform = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      image:['',Validators.required],
      category:['',Validators.required]

    })


  }

  searchtext(event:any){
    this.searchkey = (event.target as HTMLInputElement).value;
    console.log(this.searchkey);
    this.cartservice.search.next(this.searchkey);

  }

  addproduct(){
    if(this.productform.valid){
      this.apiservice.addproduct(this.productform.value)
      .subscribe({
        next:(res)=>{
          alert("Product added successfully")

        },
        error:()=>{
          alert("Error while adding the product");
        }
      })

    }
  }

}
