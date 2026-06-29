const express = require("express");
const router = express.Router();
const db = require("./db");

// GET /api/meetings
router.get("/", (req, res) => {
    res.send(db.getAllFromDatabase("meetings"));
});

// POST /api/meetings
router.post("/", (req, res) => {
    const newMeeting = db.addToDatabase("meetings", db.createMeeting());
    res.status(201).send(newMeeting);
});

// DELETE /api/meetings
router.delete("/", (req, res) => {
    db.deleteAllFromDatabase("meetings");
    res.status(204).send();
});

module.exports = router;
