import { Component, OnInit, OnDestroy } from '@angular/core';
// import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  public allBlogs: any;
  public currentBlog: any;
  public allCategories;

  constructor(public bloghttpservice:BlogHttpService) {

    console.log("Home component constructor called")

   }

  ngOnInit(): void {
    console.log("Home component ngOnIt called")
    // this.allBlogs = this.bloghttpservice.getAllBlogs();

    // console.log(this.allBlogs)
    // return this.allBlogs

    //API Lecture
    this.allBlogs = this.bloghttpservice.getAllBlogs().subscribe(
        data=>{
        console.log(data)
        this.allBlogs = data["data"]
      },
        error =>{
        console.log("some error occured")
        console.log(error.errorMessage)  
      }
      
    )

  }

  ngOnDestroy(){
    console.log("home component destroyed")
  }

}
