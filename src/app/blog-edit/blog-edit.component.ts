import { Component, OnInit } from '@angular/core';

import { BlogHttpService } from '../blog-http.service';

import {ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']

})
export class BlogEditComponent implements OnInit {

  public currentBlog: any
  public possibleCategories : any

  constructor(private _route:ActivatedRoute, private router:Router,public bloghttpservice:BlogHttpService,
    public location:Location) { }

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    //rest api lecture
    this.bloghttpservice.getSingleBlogonClickofRead(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"]
        console.log("current blog is")
        console.log(this.currentBlog)
        
      },
      error =>{
        console.log("some error occured")
        console.log(error.errorMessage)
        
      }
    );
    
  }

    // edit the blog method
    public editThisBlog(){
      this.bloghttpservice.editBlog(this.currentBlog.blogId , this.currentBlog).subscribe(
        
        data => {
          console.log(data)
          console.log("blog edited successfully")
          setTimeout(()=>{
            this.router.navigate(['/blog', this.currentBlog.blogId])
          }, 3000)
        },

        error =>{
          console.log("some error occured")
          console.log(error.errorMessage)
          
        }
        
      )

    }

}
