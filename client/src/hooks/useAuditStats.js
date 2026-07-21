import { useEffect, useState } from "react";
import { getStats } from "../api/auditApi";
import { useAuditContext } from "../context/AuditContext";

export default function useAuditStats() {
  const { refresh } = useAuditContext();

  const [stats, setStats] = useState({
    totalLogs: 0,
    successLogs: 0,
    failureLogs: 0,
    todayLogs: 0,
  });

  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    try {
      setLoading(true);

      const response = await getStats();

      setStats({
        totalLogs: response.data.totalLogs,
        successLogs: response.data.successLogs,
        failureLogs: response.data.failureLogs,
        todayLogs: response.data.todayLogs,
      });
    } catch (error) {
      console.error("Error fetching statistics:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [refresh]);

  return {
    stats,
    loading,
    refreshStats: fetchStats,
  };
}