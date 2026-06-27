const express = require("express");
const cors = require("cors");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

app.use(cors());
app.use(express.static("public"));

app.get("/api/quotes/random", (req, res) => {
    res.json({ quote: getRandomElement(quotes) });
});

app.get("/api/quotes", (req, res) => {
    const { person } = req.query;
    if (person) {
        const filtered = quotes.filter((q) => q.person === person);
        res.json({ quotes: filtered });
    } else {
        res.json({ quotes });
    }
});

app.post("/api/quotes", (req, res) => {
    const { quote, person } = req.query;
    if (!quote || !person) {
        return res
            .status(400)
            .json({ error: "Quote and person are required." });
    }
    const newQuote = { quote, person };
    quotes.push(newQuote);
    res.status(201).json({ quote: newQuote });
});

// export app for use in main.js and for testing
module.exports = { app };
