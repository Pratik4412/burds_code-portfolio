const express = require("express");
const cors = require("cors");
const app = express();
const sendMail = require("./controller/email.controller.js");
require("dotenv").config();

app.use(cors({ origin: "https://birds-code.netlify.app" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is the server");
});

app.post("/sendEmail", sendMail);

const start = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error starting server:", error);
  }
};

start();
