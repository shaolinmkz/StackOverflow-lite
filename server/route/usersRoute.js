import express from "express";
import { Users } from "../controller";
import { userExists } from "../middlewares/signupValidation";

const usersRoute = express.Router();

usersRoute.post("/api/v1/auth/users/", userExists, Users.createUser );

export default usersRoute;