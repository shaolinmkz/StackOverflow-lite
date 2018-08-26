import express from "express";
import { signupUsers } from "../controller";
import { userExists } from "../middlewares";

const signupRoute = express.Router();

signupRoute.post("/api/v1/auth/signup", userExists, signupUsers.createUser );

export default signupRoute;