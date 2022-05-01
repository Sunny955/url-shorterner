const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

require("dotenv").config();

const app = express();
app.enable("trust proxy");
app.use(helmet());
app.use(morgan("common"));
app.use(
  express.json({
    extended: false,
  })
);

// app.get("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   res.json({
//     message: "Code generator for url shorterner",
//   });
// });

// Database config
const connection = require("./config/db.config");
connection.once("open", () => console.log("DB Connected"));
connection.on("error", () => console.log("Error"));

app.use("/", require("./routes/redirect"));
app.use("/api/url", require("./routes/url"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
