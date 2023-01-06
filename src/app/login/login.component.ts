import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  displayError:any

  loginForm=[];
  data:any=[];
  List:any=[];

  user:any={};
  
  form!: FormGroup;
  private  formSumitAttempt: boolean | undefined;
  

  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)])
    })   
    
  }

   post(data:any)
   {
    if(data.value.email!=""||data.value.password!="")
    {
      const localdata = localStorage.getItem('register')
  if(localdata!=null){
    this.data = JSON.parse(localdata)
    console.log(this.data);
  }
  this.List = this.data.filter((item:any) => item.email === data.value.email && item.password == data.value.password);
  localStorage.setItem('Login',JSON.stringify(this.List))
  if(this.List.length==0)
  {
    Swal.fire('Invalid Username or Password!', '', 'error').then(() => {
      window.location.reload() 
  })
    }
    else{
      window.location.href="/postlist"
    }
    //  console.log(this.form.value)
    //  this.user = Object.assign(this.user, this.form.value);
    //  this.addUser(this.user);
   
  //  addUser(user: any) {
  //   let users = [];
  //   if(localStorage.getItem('Users')){
  //     // users = JSON.parse(localStorage.getItem('Users'));
  //     users = [user, ...users];
  //   }
  //   else
  //   {
  //     users = [user];
  //   }
   
     
   }
  }
}


      
  
 


     






