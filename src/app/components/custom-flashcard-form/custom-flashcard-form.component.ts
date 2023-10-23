import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Flashcard } from '../flashcard/models/flashcard.model';

@Component({
  selector: 'app-custom-flashcard-form',
  templateUrl: './custom-flashcard-form.component.html',
  styleUrls: ['./custom-flashcard-form.component.css']
})
export class CustomFlashcardFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private favService: FavoritesService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        question: ["", Validators.compose([Validators.required, Validators.maxLength(210)])],
        answer: ["", Validators.compose([Validators.required, Validators.maxLength(210)])],
        learnMore: [""]
      }
    );
  }

  onSubmit() {
    const { question, answer, learnMore } = this.form.value;
    //Create new favorite flashcard
    this.favService.addFlashcardToFavorites(new Flashcard(question, answer, learnMore || undefined));
    //Reset form
    this.form.reset();
  }


}
