const express = require("express");
const router = express.Router();

router.use("/minions", require("./minions"));
router.use("/ideas", require("./ideas"));
router.use("/meetings", require("./meetings"));

module.exports = router;
