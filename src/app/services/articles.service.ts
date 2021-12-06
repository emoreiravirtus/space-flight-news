import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { httpOptions } from '../shared/network/http-options';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(lastIndex?: number) {

    if(lastIndex) {
      return this.http.get(`${environment.apiURL}/articles?_limit=10&_start=${lastIndex}`, httpOptions);
    }
    else {
      return this.http.get(`${environment.apiURL}/articles?_limit=10`, httpOptions);
    }
    
  }

  getArticleById(id: string) {
    return this.http.get(`${environment.apiURL}/articles/${id}`, httpOptions);
  }
}
