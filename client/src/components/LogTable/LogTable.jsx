import { DataGrid } from "@mui/x-data-grid";
import { Paper, Chip, Typography } from "@mui/material";

const columns = [
  {
    field: "actor",
    headerName: "Actor",
    flex: 1.5,
    minWidth: 220,
  },
  {
    field: "role",
    headerName: "Role",
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
      <Typography fontWeight={500}>
        {params.value?.toUpperCase()}
      </Typography>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1.3,
    minWidth: 180,
  },
  {
    field: "resource",
    headerName: "Resource",
    flex: 2,
    minWidth: 250,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 130,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === "SUCCESS" ? "success" : "error"}
        variant="filled"
        size="small"
        sx={{
          fontWeight: "bold",
          minWidth: 90,
        }}
      />
    ),
  },
  {
    field: "ipAddress",
    headerName: "IP Address",
    flex: 1.2,
    minWidth: 160,
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    flex: 1.5,
    minWidth: 220,
    valueFormatter: (value) => {
      if (!value) return "";
      return new Date(value).toLocaleString();
    },
  },
];

export default function LogTable({
  rows,
  loading,
  rowCount,
  paginationModel,
  setPaginationModel,
  sortModel,
  setSortModel,
}) {
  return (
    <Paper
      elevation={4}
      sx={{
        mt: 3,
        height: 650,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        loading={loading}
        rowCount={rowCount}
        pagination
        paginationMode="server"
        sortingMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        sortModel={sortModel}
        onSortModelChange={setSortModel}
        pageSizeOptions={[10, 20, 50]}
        disableRowSelectionOnClick
        sx={{
          border: 0,

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1976d2",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 15,
          },

          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },

          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "#fafafa",
          },

          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#e3f2fd",
          },

          "& .MuiDataGrid-cell": {
            alignItems: "center",
            borderBottom: "1px solid #f0f0f0",
          },

          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid #ddd",
          },
        }}
      />
    </Paper>
  );
}