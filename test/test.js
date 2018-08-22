import app from "../server.js";
import supertest from "supertest";

const { expect } = require("chai"); 

const request = supertest.agent(app);

//Test for get all questions
describe("GET all questions api", () => {
    it("should return status 200", (done) => {
        request
        .get("/api/v1/questions")
        .expect(200)
        .end((err, res) => {
            expect(res.status).to.eql(200);
            expect(res.body.message).to.eql("All questions delivered successfully");
            if (err)  {return done(err); }
            done();
        });
    });

    it("should return all questions in JSON format", (done) => {
        request.get("/api/v1/questions")
            .expect("content-type", /json/)
            .end(done);
    });
});


// Test for get a questions
describe("GET a questions api", () => {
    it("should return 404 is question doesnt exist", (done) => {
        request.get("/api/v1/questions/100")
            .end((err, res) => {
                expect(res.status).to.eql(404);
                expect(res.body.message).to.eql("Question is not available yet");
                if (err) { return done(err); }
                done();
            });
    });

    it("should return question", (done) => {
        request.get("/api/v1/questions/2")
            .end((err, res) => {
                expect(res.status).to.eql(200);
                expect(res.body.message).to.eql("Question received successfully");
                if (err) { return done(err); }
                done();
            });
    });
});



// //Test for post a questions
describe("POST a questions api", () => {

    it("should return 400 if question field is empty", (done) => {
        request.post("/api/v1/questions")
            .send({
                question: null
            })
            .end((err, res) => {
                expect(res.status).to.eql(400);
                expect(res.body.message).to.eql("Question field is required");
                if (err) { return done(err); }
                done();
            });
    });

    it("should return 201 if question is posted", (done) => {
        request.post("/api/v1/questions")
            .send({
                question: "What are the steps to being a world class developer"
            })
            .end((err, res) => {
                expect(res.status).to.eql(201);
                expect(res.body.message).to.eql("Question has been posted successfully");
                if (err) { return done(err); }
                done();
            });
    });
});



//Test for post an answer
describe("POST a questions api", () => {

    it("should return 404 if question is not found", (done) => {
        request.post("/api/v1/questions/100/answers")
            .send({
                id: 2,
                answer: "Locate the nearest Andelan..."
            })
            .end((err, res) => {
                expect(res.status).to.eql(404);
                expect(res.body.message).to.eql("Question is not available");
                if (err) { return done(err); }
                done();
            });
    });

    it("should return 201 if answer post is successful", (done) => {
        request.post("/api/v1/questions/3/answers")
            .send({
                id: 2,
                answer: "Locate the nearest Andelan..."
            })
            .end((err, res) => {
                expect(res.status).to.eql(201);
                expect(res.body.message).to.eql("Answer posted successfully");
                if (err) { return done(err); }
                done();
            });
    });
});