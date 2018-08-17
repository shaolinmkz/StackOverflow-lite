import express from "express";
import bodyParser from "body-parser"; //middleware that reads requests
import logger from "morgan";
import { questionsRoute } from "./server/route";

//Assigning express framework to a variable to make portable
const app = express();

// log requests to console
app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(questionsRoute);

app.listen(8000, () => {
    console.log("Listening on port 8000");
});

export default app;