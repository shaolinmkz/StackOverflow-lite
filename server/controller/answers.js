import { questions } from "../dataStructureDB";

export default {
    postAnswer(req, res) {
        const { answer, username } = req.body;
        const id = parseInt(req.params.id, 10);

        const question = questions.filter((question) => { return question.id === id; });
        if (question.length < 1) {
            return res.status(404).send({
                status: "Error",
                message: "Question is not available",
            });
        }

        const answerId  = question[0].answers.length + 1;
        const answerContainer = {
            id: answerId,
            answer,
            username,
        }
        question[0].answers.push(answerContainer);

        return res.status(201).send({
            status: "Success",
            message: "Answer posted successfully",
            data: question[0].answers,
        });
    },
}