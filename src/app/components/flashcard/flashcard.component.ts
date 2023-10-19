import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlashcardsService } from '../../services/flashcards.service';
import { Flashcard } from './models/flashcard.model';

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
  category: string | null = "";

  constructor(private flashcardsService: FlashcardsService, private route: ActivatedRoute) {}

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

    this.route.paramMap
    .subscribe((params: ParamMap) => this.category = params.get('category'));

    this.flashcardsService.getChoosedTopicFlashcards(this.category || "");
  }

  toggleFlip(): void {
    this.flashcardsService.handleFlip();
  }

  ngOnDestroy(): void {
    this.getFlashcardSubscription?.unsubscribe();
    this.isFlippedSubscription?.unsubscribe();
  }

}
