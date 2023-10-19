import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Flashcard } from '../components/flashcard/models/flashcard.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService implements OnInit {
  private favoritesFlashcards: Flashcard[] = [];
  favoritesUpdated = new Subject<Flashcard[]>();

  constructor() { }

  ngOnInit(): void {
    this.favoritesFlashcards = this.getFavoritesFromLocalStrorage();
    this.favoritesUpdated.next(this.favoritesFlashcards);
  }

  private getFavoritesFromLocalStrorage(): Flashcard[] {
    const favoritesFromLocalStorage: Flashcard[] = JSON.parse(localStorage.getItem("favoritesFlashcards") || '[]');
    return favoritesFromLocalStorage;
  }

  setFavoritesToLocalStorage(favorites: Flashcard[]): void {
    localStorage.setItem("favoritesFlashcards", JSON.stringify(favorites));
  }

  addFlashcardToFavorites(flashcard: Flashcard) {
    const existingFavorites = this.getFavoritesFromLocalStrorage();
    const updatedFavorites = [...existingFavorites, flashcard];
    this.favoritesFlashcards = updatedFavorites;
    this.favoritesUpdated.next(this.favoritesFlashcards);
  }
}
