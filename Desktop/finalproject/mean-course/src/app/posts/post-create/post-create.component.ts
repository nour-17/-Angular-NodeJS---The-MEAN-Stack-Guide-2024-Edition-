import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Post } from '../post.model';
import { CommonModule } from '@angular/common';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  constructor(public postsService: PostsService) {}
  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    this.postsService.addPost(postForm.value.title, postForm.value.content);

    // Reset the form
    postForm.resetForm();
    
  }
  
}