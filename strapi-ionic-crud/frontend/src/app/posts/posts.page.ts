import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  posts: any = [];

  constructor(private postService: PostService) {}
  
  loadPosts(){
    this.postService.getPosts().subscribe(
      (res) => {
        console.log(res) 
        this.posts = res
      },
      (err) => console.log(err)
      );
  }

  ngOnInit() {
    this.loadPosts();
    }

  ionViewWillEnter() {
    this.loadPosts();
  }
  }
