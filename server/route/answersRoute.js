import express from "express";
import { answers } from "../controller";
const answersRoute = express.Router();

answersRoute.post("/api/v1/questions/:id/answers", answers.postAnswer);

export default answersRoute;