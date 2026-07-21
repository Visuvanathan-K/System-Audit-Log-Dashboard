import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import StatisticsCards from "../components/StatisticsCards/StatisticsCards";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import LogTable from "../components/LogTable/LogTable";

import useAuditLogs from "../hooks/useAuditLogs";
import useAuditStats from "../hooks/useAuditStats";

export default function Dashboard() {
  // Search
  const [search, setSearch] = useState("");

  // Filters
  const [filters, setFilters] = useState({
    status: "",
    role: "",
    action: "",
  });

  // Pagination
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  // Sorting
  const [sortModel, setSortModel] = useState([
    {
      field: "timestamp",
      sort: "desc",
    },
  ]);

  // Audit Logs
  const {
    rows,
    rowCount,
    loading,
  } = useAuditLogs(
    paginationModel,
    sortModel,
    search,
    filters
  );

  // Dashboard Statistics
  const {
    stats,
    loading: statsLoading,
  } = useAuditStats();

  return (
    <DashboardLayout>
      {/* Statistics */}
      <StatisticsCards
        stats={stats}
        loading={statsLoading}
      />

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Filters */}
      <FilterPanel
        filters={filters}
        setFilters={setFilters}
      />

      {/* Audit Log Table */}
      <LogTable
        rows={rows}
        loading={loading}
        rowCount={rowCount}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        sortModel={sortModel}
        setSortModel={setSortModel}
      />
    </DashboardLayout>
  );
}