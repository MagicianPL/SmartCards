import tasks from "src/app/constants/tasks";

export class Flashcard {
    private question: string;
    private answer: string;
    private learnMore?: string;
    private tasksPath?: string[];

    constructor(question: string, answer: string, learnMore?: string, tasksPath?: string[]) {
        this.question = question;
        this.answer = answer;
        this.learnMore = learnMore;
        this.tasksPath = tasksPath;
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

    getTaskObject(): {name: string, tasks: string[]} | undefined {
        if (!this.tasksPath) return undefined;
        // @ts-ignore
        if (tasks[this.tasksPath[0]]) {
            // @ts-ignore
            return tasks[this.tasksPath[0]][this.tasksPath[1]];
        }
        return undefined;
    }

    getFlashcardData(): Flashcard {
        return this;
    }
}