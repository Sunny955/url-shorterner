// import mongoose package
const mongoose = require("mongoose");

// declare a Database string URI
const DB_URI = "mongodb://0.0.0.0:27017/urlshortener";

// establishing a database connection
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

// export the connection object
module.exports = connection;
