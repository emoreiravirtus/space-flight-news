import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { httpOptions } from '../shared/network/http-options';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(`${environment.apiURL}/articles`, httpOptions);
  }

  getArticleById(id: string) {
    return this.http.get(`${environment.apiURL}/articles/${id}`, httpOptions);
  }
}
