import app from "../server.js";
import supertest from "supertest";

const { expect } = require("chai"); 

const request = supertest.agent(app);
const questions = [];


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
    
    // it("should return status 404 if no question exists in the dataStructure", (done) => {
    //     request
    //         .get(questions)
    //         .get("/api/v1/questions")
    //         .end((err, res) => {
    //             expect(res.status).to.eql(404);
    //             expect(res.body.message).to.eql("No questions are available");
    //             if (err) { return done(err); }
    //             done();
    //         });
    // });

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



// //Test for post an answer
// describe("POST an answer api", () => {
//     it("should return status 200", (done) => {
//         request.get("/api/v1/questions/:id/answers")
//             .expect(200)
//             .end(done);
//     });

//     it("should return status sent", (done) => {
//         request.get("/api/v1/questions/:id/answers")
//             .expect("sent")
//             .end(done);
//     });
// });