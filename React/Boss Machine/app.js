const express = require("express");
const app = express();

// Add middleware for handling CORS requests from index.html
const cors = require("cors");
app.use(cors());
// Add middware for parsing request bodies here:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require("./server/api");
app.use("/api", apiRouter);

module.exports = app;
