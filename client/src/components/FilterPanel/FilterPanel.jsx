import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

export default function FilterPanel({
  filters,
  setFilters,
}) {
  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{
        mt: 2,
        mb: 3,
      }}
    >
      <FormControl fullWidth sx={{ minWidth: 220 }}>
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          value={filters.status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="SUCCESS">SUCCESS</MenuItem>
          <MenuItem value="FAILURE">FAILURE</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ minWidth: 220 }}>
        <InputLabel>Role</InputLabel>
        <Select
          name="role"
          value={filters.role}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ minWidth: 220 }}>
        <InputLabel>Action</InputLabel>
        <Select
          name="action"
          value={filters.action}
          label="Action"
          onChange={handleChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="LOGIN">LOGIN</MenuItem>
          <MenuItem value="LOGOUT">LOGOUT</MenuItem>
          <MenuItem value="CREATE_USER">CREATE_USER</MenuItem>
          <MenuItem value="DELETE_USER">DELETE_USER</MenuItem>
          <MenuItem value="UPDATE_USER">UPDATE_USER</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}