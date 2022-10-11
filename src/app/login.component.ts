import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private authservice:ApiService, private route:Router) { }

  loginmode:boolean = true;
  loginform!:FormGroup;

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  onmodeswitch(){
    this.loginmode = !this.loginmode;

  }

  onsubmit(){
    const email = this.loginform.value.email;
    const pass = this.loginform.value.password;

    if(this.loginform.valid && this.loginmode == false){
      //console.log(this.loginform.value);



      this.authservice.signup(email, pass).subscribe(res=>{
        console.log(res)
      },
      err=>{
        console.log(err);
      })


    }
    else if(this.loginform.valid && this.loginmode == true){

      this.authservice.signin(email, pass).subscribe((res)=>{

        this.authservice.userdetails = res;
        this.authservice.loggedInEvent.emit(true);

        this.route.navigate(['products']);
      })

    }

    this.loginform.reset();




  }

}
