export class Answer {
    id: number;
    questionId: number;
    content: string;

    constructor(id: number, questionId: number, content: string) {
        this.id = id;
        this.questionId = questionId;
        this.content = content;
    }
}