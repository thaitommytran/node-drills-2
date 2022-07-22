require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3035;
const { getInputs, createInput } = require("./controller");

app.use(express.json());
app.use(cors());

app.get("/api/info", getInputs);
app.post("/api/info", createInput);

app.listen(port, () => console.log(`SERVER RUNNING ON PORT:${port}`));
