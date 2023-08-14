// post-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/models/blogPost.model';
import { BlogPostService } from 'src/app/services/blogPost.service';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { LoadingService } from 'src/app/services/loader.service';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: BlogPost[] = [];
  showModal: boolean = false;
  confirmMessage: string = '';
  selectedPost = {} as BlogPost;

  postContent: string = '';
  categoryList = [] as Array<Category>;
  category = {} as Category;
  isShowCreatePost: boolean = false;
  selectedFile: any;
  postImageBase64String: string = '';
  isEditPost: boolean = false;
  blogPost = {} as BlogPost;
  constructor(private blogPostService: BlogPostService, private categoryService: CategoryService,
    public loadingService: LoadingService, private toastService: ToastService) { }

  ngOnInit() {
    this._getCategoryList();
    this._getBlogPostList();
  }

  private _getBlogPostList() {
    this.blogPostService.getAll().subscribe({
      next: (result) => {
        console.log('getAll() blog post result: ', result);
        this.posts = result;
      },
      error: (error) => {
        console.log('error: ', error)
      },
      complete: () => {
      }
    });
  }

  onDeletePost(post: BlogPost) {
    console.log('onDeletePost post: ', post)
    this.selectedPost = post;
    this.confirmMessage = `Are you sure you want to delete ${post.title} post?`;
    this.showModal = true;
  }

  handleConfirm(postId: string) {
    console.log('handleConfirm postId: ', postId)
    // Your logic for confirmed action.
    this.blogPostService.delete(postId).subscribe({
      next: (result) => {
        console.log('delete post result: ', result)
        this.posts = this.posts.filter((post) => post.id !== postId)
      },
      error: (error) => {
        console.log('error: ', error)
      },
      complete: () => {
        this._clearConfirmationFields();
      }
    })
  }

  handleCancel() {
    // Your logic for cancelled action
    this.showModal = false;
    this._clearConfirmationFields();
  }

  onEditPost(blogPost: BlogPost) {
    this.isEditPost = true;
    this.blogPost.id = blogPost.id;
    this.blogPost.title=blogPost.title;
    this.blogPost.category = blogPost.category;
    this.blogPost.author = blogPost.author;
    this.blogPost.tags = blogPost.tags;
    this.blogPost.shortDescription = blogPost.shortDescription;
    this.blogPost.postImage = blogPost.postImage;
    this.blogPost.content = blogPost.content;
    console.log('this.blogPost: ', this.blogPost)
  }

  onCreateBlogPost() {
    this.isShowCreatePost = true;
  }

  onAddPost(form: NgForm) {


    console.log('this.blogPost.tags: ', this.blogPost.tags)

    // Get the tags and convert it to array
    let tags = Array.isArray(this.blogPost.tags) ? this.blogPost.tags : this.blogPost.tags ? this.blogPost.tags.split(',') : [];

    const blogPostRequestParams = {
      title: this.blogPost.title,
      category: this.blogPost.category,
      author: this.blogPost.author,
      tags: tags,
      content: this.blogPost.content,
      shortDescription: this.blogPost.shortDescription,
      postImage: this.blogPost.postImage
    };

    this.loadingService.show(); // Show loader

    if (!this.isEditPost) {
      // Create post
      this._createBlogPost(blogPostRequestParams);
    } else {
      // Update post
      this._updateBlogPost(blogPostRequestParams);
    }
  }

  private _updateBlogPost(blogPostRequestParams: any) {
    this.blogPostService.update(this.blogPost.id, blogPostRequestParams).subscribe({
      next: (result) => {
        console.log('update blog result: ', result);
        this.toastService.show('Post updated successfully!', { type: 'bg-success', title: 'Success' });
        const findInd = this.posts.findIndex(post => post.id === this.blogPost.id);
        if (findInd !== -1) {
          blogPostRequestParams.id = this.blogPost.id;
          this.posts[findInd] = blogPostRequestParams;
        }

        console.log('AFTER UPDATE: this.posts: ', this.posts)
      },
      error: (error) => {
        console.log('error: ', error)
      },
      complete: () => {
        this.blogPost = {} as BlogPost;
        this.isEditPost = false;
        this.loadingService.hide(); // Hide loader
      }
    });
  }

  private _createBlogPost(blogPostRequestParams: any) {
    this.blogPostService.create(blogPostRequestParams).subscribe({
      next: (result) => {
        console.log('result: ', result);
        this.toastService.show('Post created successfully!', { type: 'bg-success', title: 'Success' });

        // Push the new result to posts array
        this.posts.push(result);

      },
      error: (error) => {
        console.log('error: ', error)
      },
      complete: () => {
        this.blogPost = {} as BlogPost;
        this.isShowCreatePost = false;
        this.loadingService.hide(); // Hide loader
      }
    });
  }

  private _getCategoryList() {
    this.loadingService.show(); // Show loader
    this.categoryService.getAll().subscribe({
      next: (result) => {
        console.log('_getCategoryList result: ', result);
        this.categoryList = result;
      },
      error: (error => {
        console.log('error while getting category list:', error);
      }),
      complete: () => {
        console.log("completed api");
        this.loadingService.hide(); // Hide loader
      }
    });
  }

  hideForm() {
    this.category = {} as Category;
    this.postContent = '';
    this.isEditPost = false;
    this.isShowCreatePost = false;
    this.blogPost = {} as BlogPost;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this._convertToBase64(file);
    }
  }

  private _convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.blogPost.postImage = reader.result as string;
    };
  }

  private _clearConfirmationFields() {
    this.selectedPost = {} as BlogPost;
    this.confirmMessage = '';
    this.showModal = false;
  }

}
