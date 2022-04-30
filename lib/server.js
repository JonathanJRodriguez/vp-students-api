const PartnersController = require("./controllers/PartnersController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partnership Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    response.json(PartnersController.getAllStudents());
});

app.get("/v1/students/emails", (request, response) => {
    response.json(PartnersController.getEmailsWithCertification());
});

app.get("/v1/students/credits/:credits", (request, response) => {
    const credits = request.params.credits;
    response.json(PartnersController.getStudentsWithCredits(credits));
});

app.listen(port, () => {
    console.log(`Visual Partnership API in localhost:${port}`);
});