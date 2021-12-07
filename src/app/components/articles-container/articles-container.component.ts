import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesService } from 'src/app/services/articles.service';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { NotFoundModalComponent } from './not-found-modal/not-found-modal.component';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss']
})
export class ArticlesContainerComponent implements OnInit, AfterViewInit, OnChanges {

  articles: any;
  lastIndex = 0;
  currentlySearching = false;

  @ViewChild('loadingSymbol') loadingSymbol: ElementRef;

  @Input() searchTerm: string;

  constructor(private articlesService: ArticlesService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.articles = []
    this.loadMoreArticles();

  }

  ngAfterViewInit() {

    document.addEventListener('scroll', () => {
      if (this.isInViewport(this.loadingSymbol.nativeElement) && !this.currentlySearching && !this.searchTerm) {
        this.currentlySearching = true;
        this.loadMoreArticles();
      }
    });

    // Adaptation for mobile users.
    document.addEventListener('ontouchmove', () => {
      if (this.isInViewport(this.loadingSymbol.nativeElement) && !this.currentlySearching && !this.searchTerm) {
        this.currentlySearching = true;
        this.loadMoreArticles();
      }
    });

  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes.searchTerm && this.searchTerm) {
      this.searchArticlesByTerm();
    }

  }

  loadMoreArticles() {
    this.articlesService.getArticles(this.lastIndex).subscribe(
      response => {
        this.articles.push.apply(this.articles, response);
        this.lastIndex += 10;
        this.currentlySearching = false;
      },
      error => {
        const modalRef = this.modalService.open(ErrorModalComponent, {
          centered: true
        });

        modalRef.componentInstance.errorMessage = error.message;
      }
    )
  }

  searchArticlesByTerm() {
    this.articlesService.getArticlesByTerm(this.searchTerm).subscribe(
      response => {
          this.articles = response;

          if (!response.length) {

            const modalRef = this.modalService.open(NotFoundModalComponent, {
              centered: true
            });
            modalRef.componentInstance.searchTerm = this.searchTerm;

            this.lastIndex = 0;
            this.loadMoreArticles();
          }
      },
      error => {
        const modalRef = this.modalService.open(ErrorModalComponent, {
          centered: true
        });

        modalRef.componentInstance.errorMessage = error.message;
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

  clearSearch() {
    this.searchTerm = '';
    this.articles = [];
  }

}
