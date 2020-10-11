import { Injectable } from '@angular/core';


//importing http client to make requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


//import observable related code
import { Observable }  from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  
  public allBlogs;
  public currentBlog;

  public allCategories;
  //METHODS DECLARED

  public baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";

  public authToken = 'MzliNDU0OWZmMmNlMDVlY2NiYWNjN2NhNGRlZjJkMzZhNDg3MjE0MjAwMDlhYmYzMWFjOTFjNDVkMTg2ZjhiMzQ4MjAwMGQyNmQ1OTQ3YTBkN2Y5OWMxODFlMzJhNjFlZDhkN2M0OWI3ODNhMDA5YzBlMDQ3ZjhkYmRiYzU1MGIyMQ=='
  constructor(public _http:HttpClient) { 
    console.log("blog-http service is called")
   }


  //exception Handler
  private handleError(err:HttpErrorResponse){
    console.log("Handle error http calls")
    console.log(err.message)
    return Observable.throw(err.message)
  }

   //method to return all blogs
  public getAllBlogs(): any {

   let myResponse = this._http.get(this.baseUrl+'/all?authToken=MzliNDU0OWZmMmNlMDVlY2NiYWNjN2NhNGRlZjJkMzZhNDg3MjE0MjAwMDlhYmYzMWFjOTFjNDVkMTg2ZjhiMzQ4MjAwMGQyNmQ1OTQ3YTBkN2Y5OWMxODFlMzJhNjFlZDhkN2M0OWI3ODNhMDA5YzBlMDQ3ZjhkYmRiYzU1MGIyMQ==');
   console.log(myResponse);
   return myResponse;

  }

  //method to get a single blog
  public getSingleBlogonClickofRead(currentBlog): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlog + '?authToken=' +this.authToken)
    console.log(myResponse)
    return myResponse
  }

  //create blog
  public createBlog(blogData):any{
    let myResponse = this._http.post(this.baseUrl + '/create' +'?authToken=' +this.authToken,blogData)
    console.log(myResponse)
    return myResponse; 
  }

  //delete blog

  public deleteBlog(blogId):any{
    let data ={}
    let myResponse = this._http.post(this.baseUrl + '/' +blogId + '/delete'+'?authToken=' +this.authToken,blogId)
    return myResponse
  }


  //edit blog API called through API service

  public editBlog(blogId,blogData):any{

    let myResponse = this._http.post(this.baseUrl + '/' +blogId + '/edit'+'?authToken=' +this.authToken,blogId,blogData)
    return myResponse

  }
}