import { DatePipe, formatCurrency } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import * as AWS from 'aws-sdk';
import * as S3 from 'aws-sdk/clients/s3';
// import { LoginService } from '../Shared/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{

  userid: any;

  posts :any=[]
  data: any;
  total: any=[];
  OrderTime: any;

  constructor(){
    
  }

  
  // constructor(public actionSheetController: ActionSheetController,
  //   private http: HttpClient,private router: Router,private datepipe:DatePipe){
   
  // }

  // @ViewChild("fileUpload", { static: false })
  // fileUpload!: ElementRef;
  // files  = [];
  // public filelist:any[] | undefined;
  
  // bucket = new S3(
  //   {
  //       accessKeyId: 'AKIAQV7PAMQ75KVD3CZM',
  //       secretAccessKey: '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',
  //       region: 'ap-south-1'
  //   }
  //  );

  ngOnInit(): void {
//getting the data from localstorage
     this.data=localStorage.getItem('posts')
     console.log(this.data)
     if(this.data!=null){
      this.total.push(JSON.parse(this.data))
    }     
    console.log(this.total) 
    console.log(this.postData)

  }
//declaring the form group objects
  postData = new FormGroup({
    post : new FormControl(""),
    content : new FormControl(""),
    image : new FormControl(""),
    Comment:new FormArray([]),
    commentName:new FormControl(""),
    id:new FormControl(1),
    likeCount:new FormControl('1'),
    dislikecount:new FormControl('1')
  });
 
 //posting the data to localstorage
  movetoPost(){             
   console.log(this.postData) 
    if(this.postData.invalid){         //this if condition is used to return the page if any one field is not filled
      return
    }
    this.postData.patchValue({
       id: this.total.length + 1,      
     })     
    this.total.push(this.postData.value)
    localStorage.setItem('posts',JSON.stringify(this.total))
    this.postData.reset()
    //this function is for after post the data it will show the success message
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your post has been saved',
      showConfirmButton: false,
      timer: 1500
    })  
  }


}