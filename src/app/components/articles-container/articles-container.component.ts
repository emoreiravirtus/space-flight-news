import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss']
})
export class ArticlesContainerComponent implements OnInit, AfterViewInit {

  articles: any;
  lastIndex = 0;
  currentlySearching = false;

  @ViewChild('loadingSymbol') loadingSymbol: ElementRef;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {

    this.articlesService.getArticles().subscribe(
      response => {
        this.articles = response;
        this.lastIndex = 10;
      },
      error => {
        
      }
    )

  }

  ngAfterViewInit() {

    document.addEventListener('scroll', () => {
      if (this.isInViewport(this.loadingSymbol.nativeElement) && !this.currentlySearching) {
        this.currentlySearching = true;
        this.loadMoreArticles();
      }
    });

  }

  loadMoreArticles() {
    this.articlesService.getArticles(this.lastIndex).subscribe(
      response => {
        this.articles.push.apply(this.articles, response);
        this.lastIndex += 10;
        this.currentlySearching = false;
      },
      error => {
        
      }
    )
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

}
