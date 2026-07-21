import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import TodayIcon from "@mui/icons-material/Today";

export default function StatisticsCards({ stats }) {
  const cards = [
    {
      title: "Total Logs",
      value: stats?.totalLogs ?? 0,
      icon: <DescriptionIcon sx={{ fontSize: 42, color: "#1976d2" }} />,
      color: "#1976d2",
      bg: "#E3F2FD",
    },
    {
      title: "Success Logs",
      value: stats?.successLogs ?? 0,
      icon: <CheckCircleIcon sx={{ fontSize: 42, color: "#2E7D32" }} />,
      color: "#2E7D32",
      bg: "#E8F5E9",
    },
    {
      title: "Failure Logs",
      value: stats?.failureLogs ?? 0,
      icon: <ErrorIcon sx={{ fontSize: 42, color: "#D32F2F" }} />,
      color: "#D32F2F",
      bg: "#FFEBEE",
    },
    {
      title: "Today's Logs",
      value: stats?.todayLogs ?? 0,
      icon: <TodayIcon sx={{ fontSize: 42, color: "#ED6C02" }} />,
      color: "#ED6C02",
      bg: "#FFF3E0",
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.title}>
          <Card
            elevation={5}
            sx={{
              borderRadius: 4,
              transition: "0.3s",
              borderLeft: `6px solid ${card.color}`,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 8,
              },
            }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    variant="h3"
                    fontWeight="bold"
                  >
                    {card.value}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 65,
                    height: 65,
                    borderRadius: "50%",
                    backgroundColor: card.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}