import express from "express";
import { createNewUsers, loginUsers } from "../controller";
import { signupValidation, loginValidation } from "../middlewares";

const usersRoute = express.Router();
usersRoute.post("/api/v1/auth/signup", signupValidation, createNewUsers);
usersRoute.get("/api/v1/auth/login", loginValidation, loginUsers);

export default usersRoute;