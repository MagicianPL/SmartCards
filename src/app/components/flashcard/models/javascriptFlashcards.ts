import { Flashcard } from "./flashcard.model";
import { topicFlashcards } from "./topicFlashcards.model";

export class javascriptFlashcards extends topicFlashcards {
    topic = "Javascript";

    constructor(flashcards: Flashcard[]) {
        super(flashcards);
    }
}