class QuestionController {
    private questions: { id: number; title: string; content: string }[] = [];
    private currentId: number = 1;

    createQuestion(title: string, content: string) {
        const newQuestion = { id: this.currentId++, title, content };
        this.questions.push(newQuestion);
        return newQuestion;
    }

    getQuestions() {
        return this.questions;
    }

    getQuestionById(id: number) {
        return this.questions.find(question => question.id === id);
    }
}

export default QuestionController;