import { Injectable, Injector, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { angularFlashcardsData, cssFlashcardsData, javascriptFlashcardsData, reactFlashcardsData } from '../constants/flashcards';
import { Flashcard } from '../components/flashcard/models/flashcard.model';
import { javascriptFlashcards } from '../components/flashcard/models/javascriptFlashcards';
import { reactFlashcards } from '../components/flashcard/models/reactFlashcards';
import { topicFlashcards } from '../components/flashcard/models/topicFlashcards.model';
import { Router } from '@angular/router';
import { angularFlashcards } from '../components/flashcard/models/angularFlashcards';
import { cssFlashcards } from '../components/flashcard/models/cssFlashcards';
import { favoriteFlashcards } from '../components/flashcard/models/favoritesFlashcards';
import { FavoritesService } from './favorites.service';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {
  flashcardIsFlipped = false;
  private javascriptFlashcards = new javascriptFlashcards(javascriptFlashcardsData);
  private reactFlashcards = new reactFlashcards(reactFlashcardsData);
  choosedTopicFlashcards: topicFlashcards;
  isFlashcardFavorite = false;
  getFlashcard = new Subject<Flashcard>();
  flippedFlashcard = new Subject<boolean>();
  isFlashcardFavoriteUpdate = new Subject<boolean>();

  constructor(private router: Router, private injector: Injector) {
    this.choosedTopicFlashcards = new reactFlashcards(reactFlashcardsData);
  }

  getChoosedTopicFlashcards(category: string) {
    switch (category) {
      case "css": {
        this.choosedTopicFlashcards = new cssFlashcards(cssFlashcardsData);
        break;
      }
      case "javascript": {
        this.choosedTopicFlashcards = new javascriptFlashcards(javascriptFlashcardsData);
        break;
      }
      case "react": {
        this.choosedTopicFlashcards = new reactFlashcards(reactFlashcardsData);
        break;
      }
      case "angular": {
        this.choosedTopicFlashcards = new angularFlashcards(angularFlashcardsData);
        break;
      }
      case "favorites": {
        const favService = this.injector.get(FavoritesService);
        this.choosedTopicFlashcards = new favoriteFlashcards(favService.getFavoritesFlashcards(), "Favorite");
        break;
      }
      default: {
        //If we don't have matching category, redirect to homepage
        this.router.navigateByUrl('/');
      }
    }

    this.getRandomFlashCard();
  }

  getJavascriptFlashcards() {
    return this.javascriptFlashcards;
  }

  getReactFlashcards() {
    return this.reactFlashcards;
  }

  getTopicFlashcards() {
    return this.choosedTopicFlashcards;
  }

  getRandomFlashCard() {
    console.log('getRandomFlashCard from base service')
    const randomFlashcard = this.choosedTopicFlashcards.getRandomFlashcard();
    if (this.flashcardIsFlipped) {
      this.flashcardIsFlipped = false;
      this.flippedFlashcard.next(this.flashcardIsFlipped);
      setTimeout(() => {
        this.getFlashcard.next(randomFlashcard);
      }, 100);
      return;
    }

    console.log('Before calling next')
    this.getFlashcard.next(randomFlashcard);
  }

  handleFlip() {
    this.flashcardIsFlipped = !this.flashcardIsFlipped;
    this.flippedFlashcard.next(this.flashcardIsFlipped);
  }
}
