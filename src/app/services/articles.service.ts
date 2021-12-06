import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { httpOptions } from '../shared/network/http-options';
import { Article } from '../shared/models/articles.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(lastIndex?: number): Observable<Array<Article>> {

    if(lastIndex) {
      return this.http.get<Array<Article>>(`${environment.apiURL}/articles?_limit=10&_start=${lastIndex}`, httpOptions);
    }
    else {
      return this.http.get<Array<Article>>(`${environment.apiURL}/articles?_limit=10`, httpOptions);
    }
    
  }

  getArticlesByTerm(term: string): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(`${environment.apiURL}/articles?title_contains=${term}`, httpOptions);
  }
}
