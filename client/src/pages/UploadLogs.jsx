import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { uploadLogs } from "../api/auditApi";
import { useAuditContext } from "../context/AuditContext";

export default function UploadLogs() {
  const navigate = useNavigate();
  const { refreshDashboard } = useAuditContext();

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async () => {
    if (!file) {
      setSeverity("error");
      setMessage("Please select a JSON file.");
      return;
    }

    try {
      setLoading(true);

      const text = await file.text();
      const logs = JSON.parse(text);

      const response = await uploadLogs(logs);

      setSeverity("success");
      setMessage(
        response.data.message || "Logs uploaded successfully!"
      );

      refreshDashboard();

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("UPLOAD ERROR:");
      console.error(error);
      console.error(error.response);

      setSeverity("error");

      if (error.response) {
        setMessage(
          JSON.stringify(error.response.data, null, 2)
        );
      } else {
        setMessage(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 5,
          maxWidth: 700,
          margin: "auto",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Upload Audit Logs
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Select a JSON file containing audit logs.
        </Typography>

        <Button
          variant="outlined"
          component="label"
          sx={{ mr: 2 }}
        >
          Choose JSON File
          <input
            hidden
            type="file"
            accept=".json"
            onChange={handleFileChange}
          />
        </Button>

        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress
              size={24}
              sx={{ color: "white" }}
            />
          ) : (
            "Upload Logs"
          )}
        </Button>

        {file && (
          <Typography sx={{ mt: 3, fontWeight: "bold" }}>
            Selected File: {file.name}
          </Typography>
        )}

        {message && (
          <Alert
            severity={severity}
            sx={{
              mt: 3,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {message}
          </Alert>
        )}
      </Paper>
    </Box>
  );
}