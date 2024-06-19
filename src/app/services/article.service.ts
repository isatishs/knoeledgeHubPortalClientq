import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article/article';
import { BrowseArticle } from '../models/article/borwse-article';
import { reviewArticle } from '../models/article/review-article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  submitArticle(article: Article) {
    //apiurl:
    const apiUrl: string = "https://localhost:44395/api/Articles/article";
    // let token = localStorage.getItem("accessToken");
    // let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(apiUrl, article);

  }

  browseArticle(aid: number) {
    //apiurl:
    const apiUrl: string = `https://localhost:44395/api/Articles/browse/${aid}`;
    // let token = localStorage.getItem("accessToken");
    // let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.get<BrowseArticle[]>(apiUrl);

  }

  reviewArticle(cid: number) {
    console.log("cid>>>>>>>>>>>>", cid)
    //apiurl:
    const apiUrl: string = `https://localhost:44395/api/Articles/review/${cid}`;
    let token = localStorage.getItem("accessToken");
    let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    var res: any = this.http.get<reviewArticle[]>(apiUrl);
    return res;
  }

  approveArticle(aid: number[]) {
    //apiurl:
    const apiUrl: string = `https://localhost:44395/api/Articles/approve/`;
    // let token = localStorage.getItem("accessToken");
    // let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.put(apiUrl, aid);
  }

  rejectArticle(aid: number[]) {
    //apiurl:
    const apiUrl: string = `https://localhost:44395/api/Articles/reject/`;
    // let token = localStorage.getItem("accessToken");
    // let headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.put(apiUrl, aid);
  }

}
