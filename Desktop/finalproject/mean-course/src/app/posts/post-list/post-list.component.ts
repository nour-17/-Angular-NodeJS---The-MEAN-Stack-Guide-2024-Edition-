import { Component, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    NgFor,
    NgIf,
    MatButtonModule
  ],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'] // Corrected from styleUrl to styleUrls
})
export class PostListComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  private postsSub!: Subscription;

  constructor(public postsService:PostsService) {}
  
  ngOnInit(){
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
