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

    return res.status(201).json({
      success: true,
      message: "Logs uploaded successfully.",
      insertedCount: inserted.length,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      stack:
        process.env.NODE_ENV !== "production"
          ? error.stack
          : undefined,
    });
  }
};

const getLogs = async (req, res) => {
  try {
    const result = await auditService.getAuditLogs(req.query);

    return res.json({
      success: true,
      logs: result.logs,
      total: result.total,
    });
  } catch (error) {
    console.error("GET LOGS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getStats = async (req, res) => {
  try {
    const stats = await auditService.getAuditStats();

    return res.json({
      success: true,
      ...stats,
    });
  } catch (error) {
    console.error("GET STATS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadLogs,
  getLogs,
  getStats,
};