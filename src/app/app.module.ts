import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/shard/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { DefaultComponent } from './admin/default/default.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
import { PostListComponent } from './admin/dashboard/posts/post-list/post-list.component';
import { DatePipe } from '@angular/common';
import { Sidebar1Component } from './admin/shard/sidebar1/sidebar1.component';
import { HttpClientModule } from '@angular/common/http';
import { Sidebar2Component } from './admin/shard/sidebar2/sidebar2.component';
import { LoginComponent } from './login/login.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { SignupComponent } from './signup/signup.component';





const Ux_Modules = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    PostsComponent,
    DefaultComponent,
    PostCreateComponent,
    PostListComponent,
    Sidebar1Component,
    Sidebar2Component,
    LoginComponent,
    FieldErrorDisplayComponent,
    SignupComponent  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ux_Modules,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
   
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  // entryComponents:[ConfirmationDialog]
})
export class AppModule { }
