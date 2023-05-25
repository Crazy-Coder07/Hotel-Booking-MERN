const express = require("express");
const app = express();
const fs = require("fs");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// Db connection
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));



// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


fs.readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});



const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});

