import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() articleData: any

  constructor(private modal: NgbModal) { }

  openModal() {
    const modalRef = this.modal.open(ModalComponent, {
      centered: true,
      size: 'lg'
    });

    modalRef.componentInstance.articleData = this.articleData;
  }
}
