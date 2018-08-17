import { questions } from "../dataStructureDB";

export default {
    getAllQuestions(req, res) {
        if (questions.length < 1) {
            return res.send({message: "No questions are available"});
        } else {
            return res.status(200).send({
                message: "All questions delivered successfully",
                questions,
            });
        }
    },

    getQuestion(req, res) {
        const id = parseInt(req.params.id, 10);

        const result = questions.filter((question) => { //creates an array of the questions array that 
            if (question.id === id) {                   //matches the if condition within the code block
                return question;
            }
        });

        if (result.length < 1) {
            return res.status(404).send({
                message: "Question is not available yet"
            });
        }

        return res.status(200).send({ 
            status: "Success",
            message: "Question received successfully",
            question: result[0],
        });
    },
}