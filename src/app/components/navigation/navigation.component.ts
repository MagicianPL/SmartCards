import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private flashcardsService: FlashcardsService) {}

  handleClick(category: string) {
    this.flashcardsService.getChoosedTopicFlashcards(category);
  }

}
