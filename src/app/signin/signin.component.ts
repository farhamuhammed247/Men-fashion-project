import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  submit:any=""
  name:any="farha mohamed"
  email:any="farha@gmail.com"
 password:any="123456"
 confirm:any="123456"

  form: any;
 
 

  constructor(private formbuilder:FormBuilder, private router:Router,private formBuilder: FormBuilder){
    this.form=this.formbuilder.group({
      name:['',Validators.required,Validators.name],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      confirm:['',[Validators.required]]
    })
  }
  
  get f(){
    return this.form.controls
  
  }

  test(){
  
  console.log(this.form.value)
    if(this.form.value.name=="farha mohamed" && this.form.value.email=="farha@gmail.com" && this.form.value.password=="123456" && this.form.value.confirm=="123456" ){
      this.submit="login sussesfully"
      // this.router.navigate(['/home']);
    this.router.navigate(['/home']).then(()=>{window.location.reload();})
    }
  
    else{
      this.submit="login failed"
    }
  
  }
}
