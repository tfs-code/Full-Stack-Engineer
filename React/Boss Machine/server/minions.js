const express = require("express");
const router = express.Router();
const db = require("./db");

// GET /api/minions
router.get("/", (req, res) => {
    res.send(db.getAllFromDatabase("minions"));
});

// POST /api/minions
router.post("/", (req, res) => {
    const newMinion = db.addToDatabase("minions", req.body);
    res.status(201).send(newMinion);
});

// GET /api/minions/:minionId
router.get("/:minionId", (req, res) => {
    const minion = db.getFromDatabaseById("minions", req.params.minionId);
    if (!minion) return res.status(404).send({ error: "Minion not found" });
    res.send(minion);
});

// PUT /api/minions/:minionId
router.put("/:minionId", (req, res) => {
    const existing = db.getFromDatabaseById("minions", req.params.minionId);
    if (!existing) return res.status(404).send({ error: "Minion not found" });
    const updated = db.updateInstanceInDatabase("minions", req.body);
    res.send(updated);
});

// DELETE /api/minions/:minionId
router.delete("/:minionId", (req, res) => {
    const existing = db.getFromDatabaseById("minions", req.params.minionId);
    if (!existing) return res.status(404).send({ error: "Minion not found" });
    db.deleteFromDatabasebyId("minions", req.params.minionId);
    res.status(204).send();
});

module.exports = router;
