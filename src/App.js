import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Register from "./pages/Register";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import OrderDetails from "./pages/OrderDetails";

function App() {
  const [ingredientsImages, setIngredientsImages] = useState([]);
  const [order, setOrder] = useState({});

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <Home
                  order={order}
                  setOrder={setOrder}
                  ingredientsImages={ingredientsImages}
                  setIngredientsImages={setIngredientsImages}
                />
              }
            />
            <Route exact path="/" element={<Login />} />
            <Route
              exact
              path="/checkout"
              element={
                <PlaceOrder
                  ingredientsImages={ingredientsImages}
                  setIngredientsImages={setIngredientsImages}
                  order={order}
                />
              }
            />
            <Route exact path="/orders" element={<OrderDetails />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
