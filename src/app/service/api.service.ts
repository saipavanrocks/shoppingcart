import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }

  getproducts(){

    return this.api.get(" https://fakestoreapi.com/products/")
    .pipe(map((res:any)=>{
      return res

    }))
  }

}
