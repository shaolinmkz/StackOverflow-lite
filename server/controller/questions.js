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
    }
}