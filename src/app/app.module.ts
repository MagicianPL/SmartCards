import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { HeaderComponent } from './components/header/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainPageComponent } from './pages/mainPage/main-page/main-page.component';
import { InfoComponent } from './components/info/info.component';
import { CategoryContentComponent } from './components/categoryContent/category-content/category-content.component';
import { FooterComponent } from './components/footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    HeaderComponent,
    NavigationComponent,
    MainPageComponent,
    InfoComponent,
    CategoryContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
