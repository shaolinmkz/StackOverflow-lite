import { questions } from "../dataStructureDB";

export default {
    postAnswer(req, res) {
        const answer = req.body;

        if (!answer.id) {
            return res.sendStatus(500);
        } else {
            questions.answers.push(answer);
        }
        return res.sendStatus(204);
    },
}