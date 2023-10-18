import { Flashcard } from "./flashcard.model";

export class topicFlashcards {
    private flashcards: Flashcard[];

    constructor(flashcards: Flashcard[]) {
        this.flashcards = flashcards;
    }

    getFlashcards(): Flashcard[] {
        return this.flashcards;
    }

    getRandomFlashcard(): Flashcard {
        const randomIndex = Math.floor(Math.random() * this.flashcards.length);
        return this.flashcards[randomIndex];
    }
}