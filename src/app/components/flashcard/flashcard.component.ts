import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlashcardsService } from '../../services/flashcards.service';
import { Flashcard } from './models/flashcard.model';
import { topicFlashcards } from './models/topicFlashcards.model';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit, OnDestroy {
  isFlipped = false;
  randomFlashcard: Flashcard | null = null;
  question: string = "";
  answer: string = "";
  getFlashcardSubscription: Subscription | null = null;
  isFlippedSubscription: Subscription | null = null;

  constructor(private flashcardsService: FlashcardsService) {}

  ngOnInit(): void {
    this.getFlashcardSubscription = this.flashcardsService.getFlashcard
    .subscribe(
      (flashcard: Flashcard) => {
        this.question = flashcard.getQuestion();
        this.answer = flashcard.getAnswer();
      }
    );

    this.isFlippedSubscription = this.flashcardsService.flippedFlashcard
    .subscribe((value: boolean) => {
      this.isFlipped = value;
    })

    this.flashcardsService.getRandomFlashCard();
  }

  toggleFlip(): void {
    this.flashcardsService.handleFlip();
  }

  ngOnDestroy(): void {
    this.getFlashcardSubscription?.unsubscribe();
    this.isFlippedSubscription?.unsubscribe();
  }

}
