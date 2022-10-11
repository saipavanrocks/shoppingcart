import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Iuserdetails } from '../modals/userdetails';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  addproduct(productdata:any){
    return this.http.post("https://angularbyprocademy-5761b-default-rtdb.firebaseio.com/products.json", productdata)
  }

  getproducts(){

    return this.http.get<any>("https://shoppingcart-dc827-default-rtdb.firebaseio.com/products.json")
    .pipe(map((res:any)=>{
      return res

    }))
  }

  API_KEY = 'AIzaSyCLtianNUJiE1jc0YoY4AK83PaK9OvE94A';

  userdetails:Iuserdetails | null = null;
  loggedInEvent = new EventEmitter<boolean>();

  //Signin
  signin(email:string, password:string):Observable<Iuserdetails>{
    return this.http.post<Iuserdetails>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
    {email, password, returnSecureToken:true});

  }


  //signup
  signup(email:string, password:string){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
    {email, password, returnSecureToken:true})

  }



}
