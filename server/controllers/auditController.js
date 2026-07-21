const auditService = require("../services/auditService");

const uploadLogs = async (req, res) => {
  try {
    const logs = req.body;

    if (!Array.isArray(logs)) {
      return res.status(400).json({
        success: false,
        message: "Request body must be an array.",
      });
    }

    const inserted = await auditService.bulkUploadLogs(logs);

    res.status(201).json({
      success: true,
      insertedCount: inserted.length,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getLogs = async (req, res) => {
  try {
    const result = await auditService.getAuditLogs(req.query);

    res.json({
      success: true,
      logs: result.logs,
      total: result.total,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getStats = async (req, res) => {
  try {
    const stats = await auditService.getAuditStats();

    res.json({
      success: true,
      ...stats,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  uploadLogs,
  getLogs,
  getStats,
};