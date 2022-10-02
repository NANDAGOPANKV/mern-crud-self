const express = require("express");
const mongoose = require("mongoose");

// expres get
const app = express();

app.use("/", (req, res) => {
  res.send("Working");
});

console.log('Git ');
app.listen(5000, () => {
  mongoose
    .connect(
      "mongodb+srv://nandagopankv:1Ilsd7sW3PhwptNT@cluster0.axmjofh.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("MONGO DB CONNECTED *ATLAS");
    })
    .then(() => {
      console.log("SERVER STARTED AT 5000");
    })
    .catch((err) => {
      throw err;
    });
});
