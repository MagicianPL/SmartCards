import { Flashcard } from "./flashcard.model";
import { topicFlashcards } from "./topicFlashcards.model";

export class reactFlashcards extends topicFlashcards {
    topic = "React";

    constructor(flashcards: Flashcard[]) {
        super(flashcards);
    }
}