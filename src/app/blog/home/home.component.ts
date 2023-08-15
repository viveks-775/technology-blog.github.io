import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogPost } from 'src/app/models/blogPost.model';
import { BlogPostService } from 'src/app/services/blogPost.service';
import { LoadingService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  recentPosts: any = [];
  categories: any = [];
  constructor(private blogPostService: BlogPostService, public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.loadingService.show(); // Show loader
    this.blogPostService.getAll().subscribe({
      next: (result) => {
        console.log('getAll postresult: ', result)
        this.blogPosts = result;
      },
      error: (error) => {
        console.log('getPosts error: ', error);
        this.loadingService.hide(); // Hide loader
      },
      complete: () => {
        this.loadingService.hide(); // Hide loader
      }
    });
  }


  // Assuming `recentPosts` is an array of objects with unique `id` properties
  trackByFn(index: number, post: any): string {
    return post.id;
  }

}

