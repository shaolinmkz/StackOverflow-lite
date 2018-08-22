import express from "express";
import bodyParser from "body-parser"; //middleware that reads requests
import logger from "morgan";
import { questionsRoute, answersRoute } from "./server/route";

//Creating a new instance of express
const app = express();

// log requests to console
app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(questionsRoute);
app.use(answersRoute);

app.get("/", function (req, res) {
    res.send("Welcome to StackOverflow-lite");
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});

export default app;