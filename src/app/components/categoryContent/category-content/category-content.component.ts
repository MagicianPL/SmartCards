import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites.service';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css']
})
export class CategoryContentComponent implements OnInit, AfterViewInit, OnDestroy {
  isFlashcardFavorite = false;
  favoritesUpdatedSubscription: Subscription | null = null;
  favIsUpdatedSub: Subscription | null = null;

  constructor(private flashcardsService: FlashcardsService, private favService: FavoritesService, private cdr: ChangeDetectorRef) { }

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
  }
}
