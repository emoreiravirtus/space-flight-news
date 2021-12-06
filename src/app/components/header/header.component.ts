import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  title = "Space Flight News";
  searchTerm: any;

  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  searchArticlesByTerm() {
    if (this.searchTerm) {
      this.submit.emit(this.searchTerm);
      this.searchTerm = '';
    }
  }

}
