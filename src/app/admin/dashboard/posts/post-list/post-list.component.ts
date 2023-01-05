import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { from } from 'rxjs';
import { AngularDelegate } from '@ionic/angular';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  implements OnInit{

  data: any=[];
  userid: any;
  comments: any=[];   
  postComment:any = [];    
  fire:any; 
  
  pos:any=[];
  comment="hggcf";
  commentPost:any[]=[]
  edit:boolean=false
  OrderTime: string | null;
  comm:any 
  total:any=[];
  mouni:any=[];
  
  
  comData = new FormGroup({
		comment : new FormControl(""),
    // id:new FormControl(1)
	})

  postData = new FormGroup({                              //here i am declaring the each element  of postData
    post : new FormControl(""),
    content : new FormControl(""),
    image : new FormControl(""),    
    id: new FormControl(1),
    like:new FormControl("")
  }) 
 
  
  // postArray: any;
  // tabkey: any;
  // tabvalue: any;

  

  //like button function
  likeCount=0;
  isLiked=false;
  err=true;
 //it is used like toggle function  to like and dislike
  

  // getdata(){
  //   this.postArray.forEach((element:any)=>{
  //     this.tabkey=Object.keys(element);
  //     this.tabvalue?.push(Object.values(element));
  //   });
  // }

//for date and time display
  constructor(private datepipe:DatePipe){                   
    this.OrderTime = this.datepipe.transform((new Date),'MM/dd/yy h:mm');
    console.log(this.OrderTime);
  }  

  ngOnInit(): void {

  //getting the data from localstorage
  //here posts is the key of the array values
    this.data=JSON.parse(localStorage.getItem('posts')||'{}')   
    this.total=this.data
    console.log(this.total)

    this.data=localStorage.getItem('comments')
		console.log(this.data)
		if(this.data!=null){
		 this.comments.push(JSON.parse(this.data))
	   }
  }

  //post the comments here
  like(post:any){
    debugger
    var pos =localStorage.getItem('posts')
    if(pos !=null)
    {
    this.data=JSON.parse(pos)
    }
const likeddata=this.total.find((m:{id:any;})=>m.id==post.id)


   this.likeCount=post.like
    this.likeCount++
   
    
     likeddata.like=this.likeCount;
     this.data.splice(post.id,1);
     this.data.push( likeddata)
     
     localStorage.setItem('posts',JSON.stringify(this.data) )
  }  
  comPost(data:any){
    
    //in the comments key i will store my comments
    //then i am getting my posts with the variable name is pos 
    //now iterate through all the posts and find the post with matching id and store it in variable 
    //get the post id from the comPost function that is pass the id from UI
    //after finding matching post find the key with comments and push new comment to the comments key array
    
    localStorage.setItem('comments',JSON.stringify(this.comData.value))
    
    var pos =JSON.parse(localStorage.getItem('posts') || '{}')
    pos.forEach((item: { id: any;Comment:any}) =>{
      this.comm =JSON.parse(localStorage.getItem('comments') || '{}')
      this.mouni.push(this.comm)
      if(data.id == item.id){  //data.id is the each post id,and item.id is total posts array of id      
        // this.comm =JSON.parse(localStorage.getItem('comments') || '{}')
        // this.mouni.push(this.comm)
        console.log(this.mouni)
        const isdata =localStorage.getItem('allcomments')   //we created a allcomments key in localstorage
        if(isdata == null){      //if allcomments array is empty then the comments of mouni array is going to allcomments
          localStorage.setItem('allcomments',JSON.stringify(this.mouni))
        }else{                    //
          const olddata =JSON.parse(isdata)
          for(let i=0;i<this.mouni.length;i++){
            var sample =this.mouni[i]
          }
          olddata.push(sample)  
          console.log(olddata)        
          localStorage.setItem('allcomments',JSON.stringify(olddata))
        }
        const getda = JSON.parse(localStorage.getItem('allcomments') || '{}')
        console.log(getda)
    
        // this. mouni = item.Comment
        
        item.Comment = getda      //here Comment is array of posts we pass the getda array into Comments array
      }
      localStorage.setItem('posts',JSON.stringify(pos));
      console.log(pos)   
    })
    var ss= JSON.parse(localStorage.getItem('posts') || '{}')
    this.total = ss
  //   this.commentPost.push(this.comment)
    console.log(this.comData.value)
   }

  //deleting the data   
  deleteData(id:any){
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
        Swal.fire(  
          'Deleted!',  
          'Your imaginary file has been deleted.',  
          'success'  
        )      
    for(let i=0; i<this.total.length;i++){
      if(this.total[i].id==id){
      this.total.splice(i,1) 
      }
    }
      localStorage.setItem('posts',JSON.stringify(this.total))
     }   //stringify is used to store the data in string format
      else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your imaginary file is safe :)',  
          'error'  
        ) 
      }         
    })                                                                                                                  //used to close the form after deleting the data
  }

  editData(){                                             //edit the data  in this function i am taking array of each element
    this.edit=true
    for(let i=0; i<this.total.length;i++){
      this.postData.setValue({
        post: this.total[i].post,
        image: this.total[i].image,
        id: this.total[i].id,        
        content:this.total[i].content,
        like:this.total[i].like
      })
    }
    this.edit=true;
    console.log(this.postData)    
  }
    
  updatePost(id:any){                           //after edit the data updating the edited data
    for(let i=0; i<this.total.length;i++){                  //in this function i am taking array of each element  
      if(this.total[i].id==id ){
        this.postData.setValue({
          post: this.total[i].post,
          image: this.total[i].image,
          id: this.total[i].id,
          content: this.total[i].content ,
          like:this.total[i].like         
        })
        this.total[i]=this.postData.value
       }      
        if(this.total[i].id==id){         
          this.total[i]=this.postData.value
          alert("update your post successfully")
        }
      }
    localStorage.setItem('posts',JSON.stringify(this.total))       //post the data to localstorage
                                                      //return statement is used to returning a value when the execution of block is completed.
  }

}
