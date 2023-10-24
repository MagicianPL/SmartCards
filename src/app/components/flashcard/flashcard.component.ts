import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  @Input('currentTasksObject') currentTasksObject: any;

  isFlipped = false;
  randomFlashcard: Flashcard | null = null;
  question: string | undefined = "";
  answer: string | undefined = "";
  learnMoreUrl: string | undefined;
  getFlashcardSubscription: Subscription | null = null;
  isFlippedSubscription: Subscription | null = null;
  category: string | null = "";
  addToFavBtnClickSubscription: Subscription | null = null;

  constructor(
    private flashcardsService: FlashcardsService,
    private route: ActivatedRoute,
    private favService: FavoritesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.randomFlashcard = this.flashcardsService.currentRandomFlashcard;
    this.question = this.randomFlashcard?.getQuestion();
    this.answer = this.randomFlashcard?.getAnswer();
    this.learnMoreUrl = this.getCorrectedUrl(this.randomFlashcard?.getLearnMoreUrl());

    this.getFlashcardSubscription = this.flashcardsService.getFlashcard
    .subscribe(
      (flashcard: Flashcard | null) => {
        this.randomFlashcard = flashcard;
        this.question = flashcard?.getQuestion();
        this.answer = flashcard?.getAnswer();
        this.learnMoreUrl = this.getCorrectedUrl(flashcard?.getLearnMoreUrl());
      }
    );

    this.isFlippedSubscription = this.flashcardsService.flippedFlashcard
    .subscribe((value: boolean) => {
      this.isFlipped = value;
    })

    this.route.paramMap
    .subscribe((params: ParamMap) => this.category = params.get('category'));

    this.addToFavBtnClickSubscription = this.favService.addToFavoriteClicked
    .subscribe(() => {
        this.favService.addFlashcardToFavorites(this.randomFlashcard);
    });
  }

  toggleFlip(): void {
    this.flashcardsService.handleFlip();
  }

  handlePracticeClick() {
    this.router.navigateByUrl(`tasks/${this.currentTasksObject.categoryForUrl}/${this.currentTasksObject.name}`)
  }

  getCorrectedUrl(url: string | undefined): string | undefined {
    if (!url) return undefined;

    if (url?.startsWith('http://') || url?.startsWith('https://')) {
      return url;
    }
    return 'https://' + url;
  }

  ngOnDestroy(): void {
    this.getFlashcardSubscription?.unsubscribe();
    this.isFlippedSubscription?.unsubscribe();
    this.addToFavBtnClickSubscription?.unsubscribe();
  }

}
