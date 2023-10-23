import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { HeaderComponent } from './components/header/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InfoComponent } from './components/info/info.component';
import { CategoryContentComponent } from './components/categoryContent/category-content/category-content.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { CustomFlashcardFormComponent } from './components/custom-flashcard-form/custom-flashcard-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    HeaderComponent,
    NavigationComponent,
    InfoComponent,
    CategoryContentComponent,
    FooterComponent,
    CustomFlashcardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
