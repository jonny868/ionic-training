import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.page.html',
  styleUrls: ['./post-form.page.scss'],
})
export class PostFormPage implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit() {}

  savePost(title, description) {
    this.postService.createPost(title.value, description.value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
