import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchTerm: string;

  passSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
