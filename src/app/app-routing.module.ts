import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostListComponent } from './admin/dashboard/posts/post-list/post-list.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
import { DefaultComponent } from './admin/default/default.component';
import { Sidebar1Component } from './admin/shard/sidebar1/sidebar1.component';
import { Sidebar2Component } from './admin/shard/sidebar2/sidebar2.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  
  
  { path:'', component:DefaultComponent,
  children : [
    { path : 'dashboard',component:DashboardComponent},
    { path : 'posts',component:PostCreateComponent},
    { path : 'postlist',component:PostListComponent},
    { path : 'admin',component:AdminComponent },
    { path : 'sidebar1', component:Sidebar1Component}
  ]
},
{ path:'login',component:LoginComponent},
{ path:'signup',component:SignupComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
