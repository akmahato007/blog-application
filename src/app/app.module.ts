import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//router module used for setting application level route
import {RouterModule, Routes} from '@angular/router';

//forms module
import {FormsModule} from '@angular/forms';


//import observable related code
import { Observable }  from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateComponent } from './create/create.component';
import { createComponent } from '@angular/compiler/src/core';

//import statement for service
//import { BlogService } from './blog.service';
 import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotfoundComponent,
    CreateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    FormsModule,

    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},// when path/url is empty put it to home page
      {path:'about',component:AboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'create',component:CreateComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'**',component:NotfoundComponent}
      
    ])
  ],
  providers: [BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
