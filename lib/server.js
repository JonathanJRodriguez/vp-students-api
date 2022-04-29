const PartnersController = require("./controllers/PartnersController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partnership Api welcome!"});
});

app.listen(port, () => {
    console.log(`Visual Partnership API in localhost:${port}`);
});