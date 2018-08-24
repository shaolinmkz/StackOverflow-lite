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
    const { question } = req.body;

    if (typeof question === "string") { 
        return next();
    } else if (typeof question !== "string") {
        return res.status(400).send({
            status: "Error",
            message: "Invalid input"
        }); 
    }
    if (!question) {
        return res.status(400).send({
            status: "Error",
            message: "Question field is required"
        });
    }   
}

export const emptyAnswerField = (req, res, next) => {
    const { answer } = req.body;
    if (answer === undefined) { // Add ||req.body.username === undefined in the feature if necessary
        return res.status(400).send({
            status: "Error",
            message: "Answer field is required" //add username if required in the feature
		});
    }
    if (typeof answer === "string") {
        return next();
    }

    return res.status(400).send({
        status: "Error",
        message: "Invalid input"
    }); 
}