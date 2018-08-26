import express from "express";
import { Answers } from "../controller";
import { emptyAnswerField } from "../middlewares/questionsValidations";
const answersRoute = express.Router();

answersRoute.post("/api/v1/questions/:id/answers", emptyAnswerField, Answers.postAnswer);

export default answersRoute;