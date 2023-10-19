import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { javascriptFlashcardsData, reactFlashcardsData } from '../constants/flashcards';
import { Flashcard } from '../components/flashcard/models/flashcard.model';
import { javascriptFlashcards } from '../components/flashcard/models/javascriptFlashcards';
import { reactFlashcards } from '../components/flashcard/models/reactFlashcards';
import { topicFlashcards } from '../components/flashcard/models/topicFlashcards.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService implements OnInit {
  flashcardIsFlipped = false;
  private javascriptFlashcards = new javascriptFlashcards(javascriptFlashcardsData);
  private reactFlashcards = new reactFlashcards(reactFlashcardsData);
  private choosedTopicFlashcards: topicFlashcards;
  getFlashcard = new Subject<Flashcard>();
  flippedFlashcard = new Subject<boolean>();

  constructor(private router: Router) {
    this.choosedTopicFlashcards = new reactFlashcards(reactFlashcardsData);
  }

  ngOnInit(): void {
    this.flippedFlashcard.next(this.flashcardIsFlipped);
  }

  getChoosedTopicFlashcards(category: string) {
    switch (category) {
      case "javascript": {
        this.choosedTopicFlashcards = new javascriptFlashcards(javascriptFlashcardsData);
        break;
      }
      case "react": {
        this.choosedTopicFlashcards = new reactFlashcards(reactFlashcardsData);
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
    const randomFlashcard = this.choosedTopicFlashcards.getRandomFlashcard();
    if (this.flashcardIsFlipped) {
      this.flashcardIsFlipped = false;
      this.flippedFlashcard.next(this.flashcardIsFlipped);
      setTimeout(() => {
        this.getFlashcard.next(randomFlashcard);
      }, 100);
      return;
    }

    this.getFlashcard.next(randomFlashcard);
  }

  handleFlip() {
    this.flashcardIsFlipped = !this.flashcardIsFlipped;
    this.flippedFlashcard.next(this.flashcardIsFlipped);
  }
}
