import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

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
    // if(this.loginform.valid){
    //   //console.log(this.loginform.value);

    //   const email = this.loginform.value.email;
    //   const pass = this.loginform.value.password;

    //   this.authservice.signup(email, pass).subscribe(res=>{
    //     console.log(res)
    //   },
    //   err=>{
    //     console.log(err);
    //   })


    // }
    // else{
    //   //
    // }

  }

}
