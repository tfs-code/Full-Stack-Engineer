const express = require("express");
const router = express.Router();
const db = require("./db");

// GET /api/ideas
router.get("/", (req, res) => {
    res.send(db.getAllFromDatabase("ideas"));
});

// POST /api/ideas
router.post("/", (req, res) => {
    const newIdea = db.addToDatabase("ideas", req.body);
    res.status(201).send(newIdea);
});

// GET /api/ideas/:ideaId
router.get("/:ideaId", (req, res) => {
    const idea = db.getFromDatabaseById("ideas", req.params.ideaId);
    if (!idea) return res.status(404).send({ error: "Idea not found" });
    res.send(idea);
});

// PUT /api/ideas/:ideaId
router.put("/:ideaId", (req, res) => {
    const existing = db.getFromDatabaseById("ideas", req.params.ideaId);
    if (!existing) return res.status(404).send({ error: "Idea not found" });
    const updated = db.updateInstanceInDatabase("ideas", req.body);
    res.send(updated);
});

// DELETE /api/ideas/:ideaId
router.delete("/:ideaId", (req, res) => {
    const existing = db.getFromDatabaseById("ideas", req.params.ideaId);
    if (!existing) return res.status(404).send({ error: "Idea not found" });
    db.deleteFromDatabasebyId("ideas", req.params.ideaId);
    res.status(204).send();
});

module.exports = router;
