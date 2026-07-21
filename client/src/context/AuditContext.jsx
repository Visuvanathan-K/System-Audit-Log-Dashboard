import { createContext, useContext, useState } from "react";

const AuditContext = createContext();

export function AuditProvider({ children }) {
  const [refresh, setRefresh] = useState(false);

  const refreshDashboard = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <AuditContext.Provider
      value={{
        refresh,
        refreshDashboard,
      }}
    >
      {children}
    </AuditContext.Provider>
  );
}

export function useAuditContext() {
  return useContext(AuditContext);
}