import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListCategory } from '../models/list-category';
import { headers as headers1 } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  //private http: HttpClient;

  constructor(private http: HttpClient) {
    //this.http = http;
  }

  createCategory(category: Category) {
    //apiurl:
    const apiUrl: string = "https://localhost:44395/api/categories";
    let token = localStorage.getItem("accessToken");
    let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    //let headers = headers1;
    return this.http.post(apiUrl, category, { headers });

  }

  listCategory() {
    const apiURL: string = "https://localhost:44395/api/Categories";
    return this.http.get<Category[]>(apiURL);
  }

  editCategoy(editCategory: Category) {
    const apiURL: string = "https://localhost:44395/api/Categories";
    let token = localStorage.getItem("accessToken");
    let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.put(apiURL, editCategory, { headers });
  }

  getCategoyById(cid: number) {
    const apiURL: string = "https://localhost:44395/api/Categories/" + cid;
    return this.http.get<Category>(apiURL);
  }

  deleteCategoyById(cid: number) {
    console.log("cid>>>>>>>>", cid)
    const apiURL: string = "https://localhost:44395/api/Categories/" + cid;
    let token = localStorage.getItem("accessToken");
    let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.delete(apiURL, { headers });
  }
}

