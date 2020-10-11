import { Component, OnInit, OnDestroy } from '@angular/core';

import {ActivatedRoute , Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
  
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  
// constructor is entry point of class called when class is created or instantiated 
  constructor(private _route:ActivatedRoute, private router:Router, public bloghttpservice :BlogHttpService, public location:Location){
    console.log("blog-view Constructor is called");
   }

  ngOnInit(): void {
    console.log("blog-view NgOninit called");
    //getting blogid from route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    //calling the method defined outside
    // this.currentBlog =this.bloghttpservice.getSingleBlogonClickofRead(myBlogId);
    // console.log(this.currentBlog)
    
    //rest api lecture
    this.bloghttpservice.getSingleBlogonClickofRead(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"]
        
      },
      error =>{
        console.log("some error occured")
        console.log(error.errorMessage)
        
      }
    );
    
  }

   // calling service to delete a particular blog in .ts file
   public deleteThisblog(): any {
    this.bloghttpservice.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data)
        console.log("blog deleted successfully")
        alert("blog deleted successfully")

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      
      },

      error => {
        console.log(error)
        console.log("some error occured")
      }
    )

  }



    //go to previous page function

    public gotoPreviousPage():any{

      this.location.back()

    }


    
  ngOnDestroy() {
    console.log("blog-view destroyed")
  }  

  

}// end of blog class

