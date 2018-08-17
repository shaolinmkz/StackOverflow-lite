import express from "express";
import bodyParser from "body-parser"; //middleware that reads requests
import logger from "morgan";

//Assigning express framework to a variable to make portable
const app = express();

// log requests to console
app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/api", (req, res) => {
    return res.status(200).send({
        message: "connected successfully",
    })
});

app.all("*", (req, res) => {
    return res.status(404).send({
        message: "Oops! 404. Page not found",
    })
})