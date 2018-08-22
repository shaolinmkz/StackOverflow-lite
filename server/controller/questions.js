import { questions } from "../dataStructureDB";

export default {
    getAllQuestions (req, res) {
        if (questions.length < 1) {
             return res.status(404).send({ 
                 message: "No questions are available" 
                });
        }

            return res.status(200).send({
                message: "All questions delivered successfully",
                questions,
            });
    },

    getQuestion(req, res) {
        const id = parseInt(req.params.id, 10);

        const result = questions.filter((question) => question.id === id);

        if (result.length < 1) {
            return res.status(404).send({
                status: "Error",
                message: "Question is not available yet"
            });
        }
        return res.status(200).send({ 
            status: "Success",
            message: "Question received successfully",
            question: result[0],
        });
    },

    postQuestion(req, res) {
        const { question, username } = req.body;
        const id = (questions.length + 1);

        const questionContainer = { //created new object
            id,
            username,
            question,
            answers: [],
        }

        questions.push(questionContainer);
        return res.status(201).send({
            status: "Success",
            message: "Question has been posted successfully",
            question: questionContainer
        });
    },
}