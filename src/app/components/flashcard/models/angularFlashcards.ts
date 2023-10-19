import { Flashcard } from "./flashcard.model";
import { topicFlashcards } from "./topicFlashcards.model";

export class angularFlashcards extends topicFlashcards {
    topic = "Angular";

    constructor(flashcards: Flashcard[]) {
        super(flashcards);
    }
}