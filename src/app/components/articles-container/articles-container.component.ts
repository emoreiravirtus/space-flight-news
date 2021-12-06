import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss']
})
export class ArticlesContainerComponent implements OnInit {

  articles: any;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe(
      response => {
        this.articles = response;
      },
      error => {
        
      }
    )
  }

}
