import React, { createContext, useState } from "react";
import apiCall, { apiCallAuth } from "../Utils/helper";

// Create the context
export const AuthContext = createContext();
const host_url = "http://localhost:4005/api";
// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const login = async (body) => {
    const response = await apiCall(`${host_url}/users/login`, "POST", body);
    if (response.success) {
      // Save access token to localStorage
      localStorage.setItem("accessToken", response.accessToken);
      setIsLoggedIn(true);
    }
    return response;
  };

  // Function to handle logout
  const logout = () => {
    // Clear access token from localStorage
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  // Function to handle registration
  const register = async (body) => {
    const response = await apiCall(`${host_url}/users/register`, "POST", body);
    setIsLoggedIn(response.success);
    return response;
  };

  // Function to get current user (requires authentication)
  const currentUser = async () => {
    const response = await apiCallAuth(`${host_url}/users/get`, "GET");
    return response;
  };

  // Function to order a burger (requires authentication)
  const orderBurger = async (burgerData) => {
    const response = await apiCallAuth(
      `${host_url}/burger/order`,
      "POST",
      burgerData
    );
    return response;
  };

  // Function to read a burger orders (requires authentication)
  const ordersRead = async () => {
    const response = await apiCallAuth(`${host_url}/burger/read`, "GET");
    return response;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        register,
        orderBurger,
        ordersRead,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
