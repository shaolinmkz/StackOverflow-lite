import express from "express";
import { Questions } from "../controller";
import { questionExists, emptyQuestionField } from "../middlewares/questionsValidations";
const questionsRoute = express.Router();

questionsRoute.get("/api/v1/questions", Questions.getAllQuestions);

questionsRoute.get("/api/v1/questions/:id",questionExists, Questions.getQuestion);

questionsRoute.post("/api/v1/questions", emptyQuestionField, Questions.postQuestion);

export default questionsRoute;