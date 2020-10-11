// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BlogService {

//   public currentBlog 

//   public allBlogs = [
//     {
//       "blogId":"1",
//       "title":"Long Live the King",
//       "created":"3/12/2020",
//       "description":"The king of kings lived a long ago",
//       "author":"Admin"
//     },
//     {
//       "blogId":"2",
//       "title":"Long Live the Queen",
//       "created":"6/03/2019",
//       "author":"Admin",
//       "description":"The queen of queens lived a long ago in heaven",
//     },
//     {
//       "blogId":"3",
//       "title":"Long Live the Google-Doodle",
//       "created":"09/10/2018",
//       "author":"Admin",
//       "description":"WELL google doodle is quiet new to the era",
//     },
//   ]

  
//   // service constructor is called
//   constructor() { 
//     console.log("service constructor is called")
//    }


//    //method to return all blogs
//   public getAllBlogs() {
//     return this.allBlogs
//   }


//   //method to get a single blog
//   public getSingleBlogonClickofRead(currentBlog): any {

//     for (let blog of this.allBlogs) {
//       if (blog.blogId == currentBlog) {
//         this.currentBlog = blog;
//       }
//     }

//     console.log(this.currentBlog)

//     return this.currentBlog;
// }

// }