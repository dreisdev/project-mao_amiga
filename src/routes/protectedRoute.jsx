/* eslint-disable react/prop-types */
import { Routes, Route, Navigate } from "react-router-dom";
import { GetToken } from "../utils/storage";

const ProtectedRoutes = ({ redirectTo, children }) => {
  const isAuthenticated = !!GetToken("token");

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <Routes>
      <Route path="*" element={children} />
    </Routes>
  );
};

export default ProtectedRoutes;
