import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  submitArticle(article: Article) {
    //apiurl:
    const apiUrl: string = "https://localhost:44395/api/article/submit";
    // let token = localStorage.getItem("accessToken");
    // let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(apiUrl, article);

  }

}
