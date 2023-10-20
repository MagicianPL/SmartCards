import { Flashcard } from "./flashcard.model";

export class topicFlashcards {
    private flashcards: Flashcard[];

    constructor(flashcards: Flashcard[]) {
        this.flashcards = flashcards;
    }

    getFlashcards(): Flashcard[] {
        return this.flashcards;
    }

    getRandomFlashcard(): Flashcard | null {
        if (this.flashcards.length === 0) return null;
        if (this.flashcards.length === 1) {
            return this.flashcards[0];
        }

        const randomIndex = Math.floor(Math.random() * this.flashcards.length);
        return this.flashcards[randomIndex];
    }
}