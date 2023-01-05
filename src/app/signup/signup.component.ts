import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  Form:any=[];

  registerForm = new FormGroup({
    Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),
    confirmpassword : new FormControl('',[Validators.required,Validators.minLength(5)]),
    sid : new FormControl(0)
  })

  signup(){
    if(this.registerForm.invalid){         //this if condition is used to return the page if any one field is not filled
      return
  }
  alert('ok....')
  this.registerForm.value.sid = this.Form.length+1;
  Swal.fire('Register Successfully!', '', 'success').then(() => {
    window.location.reload()
  })
  const localdata = localStorage.getItem('register')
  if(localdata!=null){
    this.Form = JSON.parse(localdata)
    console.log(this.Form);
  }
  this.Form.push(this.registerForm.value)
  localStorage.setItem('register',JSON.stringify(this.Form))
 
}

  get Firstname()
  {
   return this.registerForm.get('Firstname');
  }
  get Lastname()
  {
   return this.registerForm.get('Lastname');
  }
  get mobile()
  {
   return this.registerForm.get('mobile');
  }
  get email()
  {
   return this.registerForm.get('email');
  }
  get password()
  {
   return this.registerForm.get('password');
  }
  get confirmpassword()
  {
   return this.registerForm.get('confirmpassword');
  }


}
