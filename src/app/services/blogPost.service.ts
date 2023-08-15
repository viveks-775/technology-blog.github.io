import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogPost.model';
// import { environment as devEnvironment } from '../../environments/environment.dev';
// import { environment as prodEnvironment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  // private baseUrl: string = 'http://localhost:8080/api/blogPosts';
   private baseUrl: string = 'https://technology-blog-node.onrender.com/api/blogPosts';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.baseUrl);
  }

  get(id: any): Observable<BlogPost> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.baseUrl}?title=${title}`);
  }
}