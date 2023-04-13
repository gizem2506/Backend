const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const database = require("./config/database.js");
dotenv.config();
const authRouter = require("./routes/auth.js");
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/", authRouter);


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const PORT = 5001;
database();
app.listen(PORT, () => {
  console.log("server is running", PORT);
});
