import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css']
})
export class CategoryContentComponent {
  constructor(private flashcardsService: FlashcardsService) { }

  handleDraw() {
    this.flashcardsService.getRandomFlashCard();
  }
}
