// import { questions } from "../dataStructureDB";

export const questionExists = (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (typeof id !== "number") {
        return res.status(400).send({
            status: "Error",
            message: "Invalid Id",
        });
    }

    return next();
}

export const emptyQuestionField = (req, res, next) => {
    const { question, /*username*/ } = req.body;
    // const id = (questions.length + 1);

    if (!question) {
        return res.status(400).send({
            status: "Error",
            message: "Question field is required"
        });
    }

    return next();
}

export const emptyAnswerField = (req, res, next) => {

    if (req.body.answer === undefined) { // Add ||req.body.username === undefined in the feature if necessary
        return res.status(400).send({
            status: "Error",
            message: "Answer field is required" //add username required in the feature
        });
    }

    return next();
}