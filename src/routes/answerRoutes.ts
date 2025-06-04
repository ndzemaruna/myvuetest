import { Router } from 'express';
import AnswerController from '../controllers/answerController';

const router = Router();
const answerController = new AnswerController();

export function setAnswerRoutes(app) {
    app.use('/api/answers', router);
    
    router.post('/', answerController.createAnswer.bind(answerController));
    router.get('/:questionId', answerController.getAnswersByQuestionId.bind(answerController));
    router.get('/answer/:id', answerController.getAnswerById.bind(answerController));
}