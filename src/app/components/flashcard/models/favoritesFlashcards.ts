import { Flashcard } from "./flashcard.model";
import { topicFlashcards } from "./topicFlashcards.model";

export class favoriteFlashcards extends topicFlashcards {
    topic = "";

    constructor(flashcards: Flashcard[], topic: string) {
        super(flashcards);
        this.topic = topic;
    }
}