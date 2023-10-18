import { Component } from '@angular/core';
import { FlashcardsService } from './services/flashcards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private flashcardsService: FlashcardsService) {}

  handleDraw() {
    this.flashcardsService.getRandomFlashCard();
  }
}
