import express from "express";
import { questions } from "../controller";
import { questionExists } from "../middlewares/questionsValidations";
const questionsRoute = express.Router();

questionsRoute.get("/api/v1/questions", questions.getAllQuestions);

questionsRoute.get("/api/v1/questions/:id",questionExists, questions.getQuestion);

questionsRoute.post("/api/v1/questions", questions.postQuestion);

export default questionsRoute;