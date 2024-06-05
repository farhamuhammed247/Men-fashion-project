import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  submit:any=""
  email:any="admin@gmail.com"
 password:any="123456"
  form: any;


  constructor(private formbuilder:FormBuilder, private router:Router){
    this.form=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  
  get f(){
    return this.form.controls
  
  }
  
  test(){
  
  console.log(this.form.value)
    if(this.form.value.email=="admin@gmail.com" && this.form.value.password=="123456"){
      this.submit="login sussesfully"
      // this.router.navigate(['/home']);
    this.router.navigate(['/home']).then(()=>{window.location.reload();})
    }
  
    else{
      this.submit="login failed"
    }
  
  }}
