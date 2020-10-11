import { Component, OnInit } from '@angular/core';

import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public bloghttpservice:BlogHttpService) {
    console.log('blog create constructor is called')
   }

  ngOnInit(): void {
  }

  public blogTitle: string = 'THIS IS DEFAULT TITLE';
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories =['comedy','laughter','action','hightech']


  //creating a blog method
  public createBlog():any{

    let blogData = {

      title :this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory
    }

    console.log(blogData);

    //passing the method here in subscribe method

    this.bloghttpservice.createBlog(blogData).subscribe(
      data => {
        console.log(data)
        console.log("Blog Created")
        alert('Blog posted successfully')
      },
      error => {
        console.log("some error occured")
        console.log(error.errorMessage)
        alert('some error occured')
      }
    )

  } // end blog method


}
