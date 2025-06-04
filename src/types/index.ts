export interface Question {
    id: number;
    title: string;
    content: string;
}

export interface Answer {
    id: number;
    questionId: number;
    content: string;
}