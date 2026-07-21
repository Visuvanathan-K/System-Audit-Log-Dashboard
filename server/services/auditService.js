const AuditLog = require("../models/AuditLog");

// Bulk upload logs
const bulkUploadLogs = async (logs) => {
  return await AuditLog.insertMany(logs, {
    ordered: false,
  });
};

// Get audit logs with search, filter, sort, and pagination
const getAuditLogs = async (queryParams) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    status,
    role,
    action,
    sortBy = "timestamp",
    sortOrder = "desc",
  } = queryParams;

  const query = {};

  // Search
  if (search) {
    query.$or = [
      { actor: { $regex: search, $options: "i" } },
      { role: { $regex: search, $options: "i" } },
      { action: { $regex: search, $options: "i" } },
      { resource: { $regex: search, $options: "i" } },
    ];
  }

  // Filters
  if (status) query.status = status;
  if (role) query.role = role;
  if (action) query.action = action;

  // Fetch logs
  const logs = await AuditLog.find(query)
    .sort({
      [sortBy]: sortOrder === "asc" ? 1 : -1,
    })
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit));

  // Total count
  const total = await AuditLog.countDocuments(query);

  return {
    logs,
    total,
  };
};

// Dashboard statistics
const getAuditStats = async () => {
  const totalLogs = await AuditLog.countDocuments();

  const successLogs = await AuditLog.countDocuments({
    status: "SUCCESS",
  });

  const failureLogs = await AuditLog.countDocuments({
    status: "FAILURE",
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayLogs = await AuditLog.countDocuments({
    timestamp: {
      $gte: today,
    },
  });

  return {
    totalLogs,
    successLogs,
    failureLogs,
    todayLogs,
  };
};

module.exports = {
  bulkUploadLogs,
  getAuditLogs,
  getAuditStats,
};