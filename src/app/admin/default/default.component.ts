import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit{
  
  sideNavStatus:boolean = false;

  @Output() sidenavToggled = new EventEmitter<boolean>();
  menuStatus:boolean=false;
  
  

  
  constructor(private router:Router){}
  ngOnInit(): void {
  }
    SidenavToggle(){
      this.menuStatus=!this.menuStatus;
      this.sidenavToggled.emit(this.menuStatus);
    } 

    logOut(){
      //this.router.navigate['/login']
      //this.router.navigate(['/login')
      // window.location.href='login'
    }
  }

function SidenavToggle() {
  throw new Error('Function not implemented.');
}

