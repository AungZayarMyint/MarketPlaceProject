import React, { useEffect } from "react";
import { checkCurrentUser } from "../api_calls/auth";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const getCurrentUser = async () => {
    try {
      const response = await checkCurrentUser();
      if (response.isSuccess) {
      } else {
        navigate("/");
        throw new Error(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect((_) => {
    getCurrentUser();
  }, []);

  return <section>{children}</section>;
};

export default AuthProvider;
