import { toast } from "react-toastify";

export default async function apiCall(url, method, body) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call error:", error);
    return { success: false, error: "API call failed" };
  }
}

export async function apiCallAuth(url, method, body = null) {
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  if (method === "GET") {
    try {
      const response = await fetch(url, {
        method,
        headers,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API call error:", error);
      return { success: false, error: "API call failed" };
    }
  } else if (method === "POST" && body !== null) {
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API call error:", error);
      return { success: false, error: "API call failed" };
    }
  } else {
    console.error("Invalid method or missing body for POST request.");
    return { success: false, error: "Invalid request" };
  }
}

export const validateForm = (formData) => {
  const { username, email, password } = formData;
  if (username.length < 5) {
    toast.error("Username should be at least 5 characters long.");
    return false;
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    toast.error("Please enter a valid email address.");
    return false;
  }
  if (
    password.length < 6 ||
    !/\d/.test(password) ||
    !/[a-zA-Z]/.test(password)
  ) {
    toast.error(
      "Password should be at least 6 characters long and contain both letters and numbers."
    );
    return false;
  }
  return true;
};
