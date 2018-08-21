import app from "../server.js";
import supertest from "supertest";
import { expect } from 'chai';

const request = supertest.agent(app);


//Test for get all questions
describe("GET all questions api", () => {
    it("should return status 200", (done) => {
        request.get("/api/v1/questions")
        .expect(200)
        .end(done);
    });

    it("should return all questions in JSON format", (done) => {
        request.get("/api/v1/questions")
            .expect("content-type", /json/)
        .end(done);
    });
});



//Test for get a questions
describe("GET a questions api", () => {
    it("should return status 200", (done) => {
        request.get("/api/v1/questions/:id")
            .expect(200)
            .end(done);
    });

    it("should return all questions in JSON format", (done) => {
        request.get("/api/v1/questions/:id")
            .expect("content-type", /json/)
            .end(done);
    });
});



//Test for post a questions
describe("POST a questions api", () => {
    it("should return status 200", (done) => {
        request.get("/api/v1/questions")
            .expect(200)
            .end(done);
    });
});



//Test for post an answer
describe("POST an answer api", () => {
    it("should return status 200", (done) => {
        request.get("/api/v1/questions/:id/answers")
            .expect(200)
            .end(done);
    });

    it("should return status sent", (done) => {
        request.get("/api/v1/questions/:id/answers")
            .expect("sent")
            .end(done);
    });
});