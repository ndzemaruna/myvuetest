export class AnswerController {
    private answers: any[] = []; // This will hold the answers in memory for now

    public createAnswer(questionId: string, content: string) {
        const newAnswer = {
            id: this.answers.length + 1, // Simple ID generation
            questionId,
            content
        };
        this.answers.push(newAnswer);
        return newAnswer;
    }

    public getAnswersByQuestionId(questionId: string) {
        return this.answers.filter(answer => answer.questionId === questionId);
    }

    public getAnswerById(answerId: string) {
        return this.answers.find(answer => answer.id === parseInt(answerId));
    }
}