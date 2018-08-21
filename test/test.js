// import ques from "../server/dataStructureDB";
// import * as supertest from "supertest";
// import chai from "chai";
// import app from "../server";
const {app} = require ("../server");
const supertest = require("supertest");
const request = supertest.agent(app);


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
