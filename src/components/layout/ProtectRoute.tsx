import { ReactNode } from "react";
import { useAppSelector } from "../../redux/Hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectRoute;
