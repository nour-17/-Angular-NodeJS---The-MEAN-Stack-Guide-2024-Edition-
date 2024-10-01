import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { HeaderComponentComponent } from "./header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { Post } from './posts/post.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostCreateComponent, HeaderComponentComponent, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  storedPosts: Post[] = [];
  onPostAdded(post: any){
    this.storedPosts.push(post)
  }
}
