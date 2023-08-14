import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogTagsComponent } from './blog-tags/blog-tags.component';
import { BlogRoutingModule } from './blog-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    BlogPostComponent,
    BlogTagsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
