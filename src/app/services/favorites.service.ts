import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Flashcard } from '../components/flashcard/models/flashcard.model';
import { FlashcardsService } from './flashcards.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesFlashcards: any = [];
  favoritesUpdated = new Subject<Flashcard[]>();
  addToFavoriteClicked = new Subject<any>();

  constructor(private flashcardsService: FlashcardsService) { 
    console.log('FAV SERVICE ON INIT')
    this.favoritesFlashcards = this.getFavoritesFromLocalStrorage();
    this.favoritesUpdated.next(this.favoritesFlashcards);

    //Everytime when a new flashcard is drew, we shoud check if this card is favorite already
    this.flashcardsService.getFlashcard
    .subscribe((flashcard: Flashcard) => {
      console.log('from fav service!!!')
      const isFavorite = this.flashcardIsFavoriteChecking(flashcard);
      console.log('isFavorite', isFavorite)
      
      this.flashcardsService.isFlashcardFavorite = isFavorite;
      this.flashcardsService.isFlashcardFavoriteUpdate.next(isFavorite);
    })
  }

  private getFavoritesFromLocalStrorage(): Flashcard[] {
    const favoritesFromLocalStorage: Flashcard[] = JSON.parse(localStorage.getItem("favoritesFlashcards") || '[]');
    console.log('favoritesFromLocalStorage', favoritesFromLocalStorage)
    return favoritesFromLocalStorage;
  }

  setFavoritesToLocalStorage(favorites: Flashcard[]): void {
    localStorage.setItem("favoritesFlashcards", JSON.stringify(favorites));
  }

  addFlashcardToFavorites(flashcard: Flashcard | null) {
    this.flashcardsService.isFlashcardFavorite = true;
    if (flashcard === null) {
      return;
    }
    const existingFavorites = this.getFavoritesFromLocalStrorage();
    const updatedFavorites = [...existingFavorites, flashcard];
    this.favoritesFlashcards = updatedFavorites;
    this.setFavoritesToLocalStorage(updatedFavorites);
    this.favoritesUpdated.next(this.favoritesFlashcards);
  }

  flashcardIsFavoriteChecking(flashcard: Flashcard): boolean {
    const question = flashcard.getQuestion();
    console.log('question', question)
    console.log('!!!!!', this.favoritesFlashcards)
    const answer = flashcard.getAnswer();
    const isFavorite = this.favoritesFlashcards.find((favFlashcard: any) => favFlashcard.question === question && favFlashcard.answer === answer);
    if (!isFavorite) return false;
    return true;
  }

  getFavoritesFlashcards(): Flashcard[] {
    return this.favoritesFlashcards.map((card: any) => new Flashcard(card.question, card.answer));
  }
}
