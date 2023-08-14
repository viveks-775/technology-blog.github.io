import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogPost } from 'src/app/models/blogPost.model';
import { BlogPostService } from 'src/app/services/blogPost.service';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blogPost: BlogPost = {} as BlogPost;
  relatedPosts: BlogPost[] = [];

  constructor(private route: ActivatedRoute, private newsApiService: NewsApiService, private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const postId = params['id']; // Get the updated post ID from the route params
      this.loadPost(postId);
    });
  }

  private loadPost(postId: string): void {
    // Make an API call or fetch the blog post data from your backend based on the selected postId
    this.blogPostService.get(postId).subscribe({
      next: (result) => {
        console.log('loadPost() result: ', result);
        this.blogPost = result;
        this.loadRelatedPosts();
      },
      error: (error) => {
        console.log('error: ', error);
      },
      complete: () => {
      }
    })
  }

  private loadRelatedPosts(): void {
    // Make an API call or fetch the related blog posts data from your backend
    this.blogPostService.getAll().subscribe({
      next: (result) => {
        this.relatedPosts = result.filter(post => post.id !== this.blogPost.id);
      },
      error: (error) => {
        console.log('error: ', error);
      },
      complete: () => {
      }
    });
  }

}
