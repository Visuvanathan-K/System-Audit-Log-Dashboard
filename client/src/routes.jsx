import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import UploadLogs from "./pages/UploadLogs";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/upload" element={<UploadLogs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}