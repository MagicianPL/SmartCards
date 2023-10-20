import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites.service';
import { FlashcardsService } from 'src/app/services/flashcards.service';
import { Flashcard } from '../../flashcard/models/flashcard.model';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css']
})
export class CategoryContentComponent implements OnInit, AfterViewInit, OnDestroy {
  isFlashcardFavorite = false;
  favoritesUpdatedSubscription: Subscription | null = null;
  favIsUpdatedSub: Subscription | null = null;
  currentFlashcard: Flashcard | null = null;
  getFlashcardSubscription: Subscription | null = null;
  category: string | null = "";

  constructor(private flashcardsService: FlashcardsService, private favService: FavoritesService, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isFlashcardFavorite = this.flashcardsService.isFlashcardFavorite;

    this.favoritesUpdatedSubscription = this.favService.favoritesUpdated
      .subscribe(() => {
        this.isFlashcardFavorite = this.flashcardsService.isFlashcardFavorite;
      })

    this.favIsUpdatedSub = this.flashcardsService.isFlashcardFavoriteUpdate
      .subscribe((value: boolean) => {
        this.isFlashcardFavorite = value;
      })

    this.getFlashcardSubscription = this.flashcardsService.getFlashcard
      .subscribe((flashcard: Flashcard | null) => {
        this.currentFlashcard = flashcard;
      });

    this.route.paramMap
      .subscribe((params: ParamMap) => this.category = params.get('category'));

    if (this.category) {
      this.flashcardsService.getChoosedTopicFlashcards(this.category)
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  handleDraw() {
    this.flashcardsService.getRandomFlashCard();
  }

  handleAddToFav() {
    this.favService.addToFavoriteClicked.next("button click");
  }

  handleRemoveFav() {
    this.favService.removeFlashcardFromFavorites(
      this.flashcardsService.currentRandomFlashcard
    );
  }

  ngOnDestroy(): void {
    this.favoritesUpdatedSubscription?.unsubscribe();
    this.favIsUpdatedSub?.unsubscribe();
    this.getFlashcardSubscription?.unsubscribe();
  }
}
