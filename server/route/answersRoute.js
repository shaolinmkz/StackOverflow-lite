import express from "express";
import { answers } from "../controller";
import { emptyAnswerField } from "../middlewares/questionsValidations";
const answersRoute = express.Router();

answersRoute.post("/api/v1/questions/:id/answers", emptyAnswerField, answers.postAnswer);

export default answersRoute;