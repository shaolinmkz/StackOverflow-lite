import express from "express";
import { questions } from "../controller";
const get_all_questionsRoute = express.Router();

get_all_questionsRoute.get("/api/v1/questions", questions.getAllQuestions);

export default get_all_questionsRoute;