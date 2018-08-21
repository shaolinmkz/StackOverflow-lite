import { questions } from "../dataStructureDB";

export default {
    postAnswer(req, res) {
        const answer = req.body;
        const id = parseInt(req.params.id, 10);
        const arrayPosition = id - 1;

            questions[arrayPosition].answers.push(answer);
            return res.status(200).send("sent");
    },
}