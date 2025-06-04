import { Router } from 'express';
import { QuestionController } from '../controllers/questionController';

const router = Router();
const questionController = new QuestionController();

export function setQuestionRoutes(app) {
    app.use('/api/questions', router);
    router.post('/', questionController.createQuestion.bind(questionController));
    router.get('/', questionController.getQuestions.bind(questionController));
    router.get('/:id', questionController.getQuestionById.bind(questionController));
}