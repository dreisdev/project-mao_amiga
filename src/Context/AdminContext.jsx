/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [eventTrue, setEventTrue] = useState(true);
  const [projectTrue, setProjectTrue] = useState(false);

  const switchToEvents = () => {
    setEventTrue(true);
    setProjectTrue(false);
  };

  const switchToProjects = () => {
    setEventTrue(false);
    setProjectTrue(true);
  };

  return (
    <AdminContext.Provider
      value={{ eventTrue, projectTrue, switchToEvents, switchToProjects }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);

  if (!context) {
    throw new Error("useAdmin deve ser usado dentro de um AdminProvider");
  }

  return context;
};
