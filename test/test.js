import ques from "../server/dataStructureDB";
import * as supertest from "supertest";
import chai from "chai";
import app from "../server";

const request = supertest.agent(app);
const expect = chai.expect;
const assert = chai.assert;

describe("GET all questions api", () => {
    // it("should return all questions", () => {
    //     const results = questionsRoute.get("/api/v1/questions", questions.getAllQuestions);
    //     expect.typeOf(results, `${ques}`);
    // });

    it("should return status 200", (done) => {
        request.get("/api/v1/questions")
        .expect(200)
        .end(done);
    });

    // it("should return all questions in JSON format", (done) => {
    //     request.get("/api/v1/questions")
    //     .expect("content-type", /JSON/)
    //     .end(done);
    // });
});
