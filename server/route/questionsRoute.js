import express from "express";
import { questions } from "../controller";
const questionsRoute = express.Router();

questionsRoute.get("/api/v1/questions", questions.getAllQuestions);

questionsRoute.get("/api/v1/questions/:id", questions.getQuestion);

questionsRoute.post("/api/v1/questions", questions.postQuestion);

export default questionsRoute;