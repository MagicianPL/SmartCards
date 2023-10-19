import { Flashcard } from "./flashcard.model";
import { topicFlashcards } from "./topicFlashcards.model";

export class cssFlashcards extends topicFlashcards {
    topic = "CSS";

    constructor(flashcards: Flashcard[]) {
        super(flashcards);
    }
}