import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: "#ffffff",
        color: "#1E293B",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side */}
        <Box display="flex" alignItems="center" gap={2}>
          <SecurityIcon
            sx={{
              color: "#1976d2",
              fontSize: 34,
            }}
          />

          <Box>
            <Typography variant="h5" fontWeight="bold">
              System Audit Dashboard
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Security Log Monitoring
            </Typography>
          </Box>
        </Box>

        {/* Right Side */}
        <Chip
          label="System Online"
          color="success"
          variant="outlined"
          sx={{
            fontWeight: 600,
          }}
        />
      </Toolbar>
    </AppBar>
  );
}