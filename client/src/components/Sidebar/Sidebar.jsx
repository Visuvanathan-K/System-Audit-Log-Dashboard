import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      text: "Upload Logs",
      path: "/upload",
      icon: <UploadFileIcon />,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#0F172A",
          color: "#fff",
          borderRight: "none",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ textAlign: "center", py: 3 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="white"
        >
          Audit Dashboard
        </Typography>

        <Typography
          variant="caption"
          sx={{ color: "#94A3B8" }}
        >
          Security Logs
        </Typography>
      </Box>

      <List sx={{ px: 2 }}>
        {menuItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              selected={active}
              sx={{
                mb: 1,
                borderRadius: 2,

                color: active ? "#fff" : "#CBD5E1",

                backgroundColor: active
                  ? "#2563EB"
                  : "transparent",

                "&:hover": {
                  backgroundColor: active
                    ? "#1D4ED8"
                    : "#1E293B",
                },

                "& .MuiListItemIcon-root": {
                  color: active ? "#fff" : "#CBD5E1",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: active ? 600 : 400,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}