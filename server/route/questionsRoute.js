import express from "express";
import { questions } from "../controller";
const questionsRoute = express.Router();

questionsRoute.get("/api/v1/questions", questions.getAllQuestions);

export default questionsRoute;