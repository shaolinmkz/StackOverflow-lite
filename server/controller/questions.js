import { questions } from "../dataStructureDB";

export default {
    getAllQuestions (req, res) {
        if (questions.length < 1) {
            return res.status(404).send({message: "No questions are available"});
        } else {
            return res.status(200).send({
                message: "All questions delivered successfully",
                questions,
            });
        }
    },

    getQuestion(req, res) {
        const id = parseInt(req.params.id, 10);

        if (typeof id !== "number") {
            res.status(400).send({
                message: "Bad request"
            });
        }

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

    postQuestion(req, res) {
        const post = req.body;
        const id = (questions.length + 1);

        if (!post) {
            return res.sendStatus(500);
        } else {
            post.id = id;
            post.answer = [];
            questions.push(post);
        }
        return res.status(200).send({
            message: "question has been posted successfully"
        });
    },
}