import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites.service';
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
  addToFavBtnClickSubscription: Subscription | null = null;

  constructor(
    private flashcardsService: FlashcardsService,
    private route: ActivatedRoute,
    private favService: FavoritesService
    ) {}

  ngOnInit(): void {
    this.getFlashcardSubscription = this.flashcardsService.getFlashcard
    .subscribe(
      (flashcard: Flashcard) => {
        this.randomFlashcard = flashcard;
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

    this.addToFavBtnClickSubscription = this.favService.addToFavoriteClicked
    .subscribe(() => {
        this.favService.addFlashcardToFavorites(this.randomFlashcard);
    });
  }

  toggleFlip(): void {
    this.flashcardsService.handleFlip();
  }

  ngOnDestroy(): void {
    this.getFlashcardSubscription?.unsubscribe();
    this.isFlippedSubscription?.unsubscribe();
    this.addToFavBtnClickSubscription?.unsubscribe();
  }

}
