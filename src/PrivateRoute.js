import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  try {
    if (!user) {
      return navigate("/login");
    }

  } catch (error) {
    return navigate("/login")
  }


  return children;
};

export default PrivateRoute;
