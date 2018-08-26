import express from "express";
import { SignupUsers } from "../controller";
// import { userExists } from "../middlewares";

const signupRoute = express.Router();

signupRoute.post("/api/v1/auth/signup", /*userExists,*/ SignupUsers.createUser );

export default signupRoute;