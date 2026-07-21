import { useEffect, useState } from "react";
import { getLogs } from "../api/auditApi";
import { useAuditContext } from "../context/AuditContext";

export default function useAuditLogs(
  paginationModel,
  sortModel,
  search,
  filters
) {
  const { refresh } = useAuditContext();

  const [rows, setRows] = useState([]);
  const [rowCount, setRowCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchLogs = async () => {
    try {
      setLoading(true);

      const sortBy =
        sortModel.length > 0
          ? sortModel[0].field
          : "timestamp";

      const sortOrder =
        sortModel.length > 0
          ? sortModel[0].sort
          : "desc";

      const response = await getLogs({
        page: paginationModel.page + 1,
        limit: paginationModel.pageSize,
        search,
        status: filters.status,
        role: filters.role,
        action: filters.action,
        sortBy,
        sortOrder,
      });

      setRows(response.data.logs || []);
      setRowCount(response.data.total || 0);
    } catch (error) {
      console.error("Error fetching audit logs:", error);
      setRows([]);
      setRowCount(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLogs();
    }, 500);

    return () => clearTimeout(timer);
  }, [
    paginationModel,
    sortModel,
    search,
    filters,
    refresh,
  ]);

  return {
    rows,
    rowCount,
    loading,
    refreshLogs: fetchLogs,
  };
}