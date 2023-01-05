import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  url=""
  onSelectFile(e:any){
    if(e.target.files){       //files is used to get the input files DOM property
     var reader = new FileReader();  //tjis object is used to read the file
     reader.readAsDataURL(e.target.files[0]);           //DataURL to read the data  
    reader.onload=(event:any)=>{                        //event parameter is used upload any type files  like xml files ,text files
    this.url=event.target.result;
    }
    }

  }

}
