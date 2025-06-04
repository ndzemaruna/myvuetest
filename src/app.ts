import express from 'express';
import { setQuestionRoutes } from './routes/questionRoutes';
import { setAnswerRoutes } from './routes/answerRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setQuestionRoutes(app);
setAnswerRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});