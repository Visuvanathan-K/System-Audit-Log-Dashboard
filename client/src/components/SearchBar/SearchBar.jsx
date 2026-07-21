import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ search, setSearch }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label="Search Audit Logs"
      placeholder="Search by actor, role, action, or resource..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
      }}
      sx={{
        my: 3,
        "& .MuiOutlinedInput-root": {
          borderRadius: 3,
          backgroundColor: "#fff",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "0 2px 10px rgba(25,118,210,0.15)",
          },
          "&.Mui-focused": {
            boxShadow: "0 4px 16px rgba(25,118,210,0.2)",
          },
        },
      }}
    />
  );
}