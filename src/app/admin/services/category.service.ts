// category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';



@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  // private baseUrl = 'http://localhost:8080/api/categories'; 
private baseUrl: string = 'https://technology-blog-node.onrender.com/api/categories';

  constructor(private http: HttpClient) {}

  createCategory(category: string|undefined): Observable<any> {
    const url = `${this.baseUrl}`; // Adjust the URL based on your API endpoints
    return this.http.post(url, category);
  }


  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  get(id: any): Observable<Category> {
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

  findByName(title: any): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}?name=${title}`);
  }
}
