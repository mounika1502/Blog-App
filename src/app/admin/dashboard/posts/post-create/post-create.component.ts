import { DatePipe, formatCurrency } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    Comment:new FormControl([]),
    id:new FormControl(1)
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

//   //aws s3 bucket
//  onFileChange(files: any) {
//     for (let index = 0; index<files.length;index++) { 
//     console.log ("inside loop")
//     const file = files[index];
//     files.push({data:"files", inprogress:"false",onprogress:0});
//     }
//     this.files.forEach(file =>{
//       this.uploadFile(files)
//     });
//   }
//  //AWS se bucket function
//   uploadFile(files:any) {
//     var params = { Bucket: 'mycloudbox1', Key: this.userid+'/images/'+files.data.name, Expires: 3600,ContentType:files.data.type };
//     var url=this.bucket.getSignedUrl('putObject',params);
//      this.http.put<any>(url, files.data).subscribe({
//       next: data =>{ console.log(data);},        
//         // console.log(files.data.name +"image uploaded successfully");      
//       error: error => {console.error('There was an error!', error)
//       alert(JSON.stringify(error))
//       }
//      });


//   }


}