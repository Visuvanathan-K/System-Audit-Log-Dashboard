const express = require("express");

const router = express.Router();

const auditController = require("../controllers/auditController");

// Upload audit logs
router.post("/upload", auditController.uploadLogs);

// Get audit logs
router.get("/logs", auditController.getLogs);

// Get dashboard statistics
router.get("/stats", auditController.getStats);

module.exports = router;