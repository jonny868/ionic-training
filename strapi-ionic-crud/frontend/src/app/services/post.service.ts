import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  APIGET = 'http://localhost:1337/api/posts?populate=*'
  APIPOST = 'http://localhost:1337/api/posts';

 
  constructor(private http: HttpClient) { }
  

  getPosts(){
   return this.http.get(this.APIGET)
  }


  getPostById(){}
  createPost(title: string, description: string){
    return this.http.post(this.APIPOST, {
      
        data: {
          title, description
        }
    })
  }
  removePostById(){}
  deletePost(){}



}
