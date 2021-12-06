import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ArticlesContainerComponent } from './components/articles-container/articles-container.component';
import { ArticleComponent } from './components/articles-container/article/article.component';
import { ModalComponent } from './components/articles-container/article/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesContainerComponent,
    ArticleComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
