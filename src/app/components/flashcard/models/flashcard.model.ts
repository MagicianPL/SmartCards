export class Flashcard {
    private question: string;
    private answer: string;
    private learnMore?: string;

    constructor(question: string, answer: string, learnMore?: string, xxx?: string) {
        this.question = question;
        this.answer = answer;
        this.learnMore = learnMore;
    }

    getQuestion(): string {
        return this.question;
    }

    getAnswer(): string {
        return this.answer;
    }

    getLearnMoreUrl(): string | undefined {
        return this.learnMore;
    }

    getFlashcardData(): Flashcard {
        return this;
    }
}