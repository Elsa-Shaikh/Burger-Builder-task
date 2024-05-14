import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PlaceOrder from "./components/PlaceOrder";
import Register from "./components/Register";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [ingredientsImages, setIngredientsImages] = useState([]);
  const order = {};

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                order={order}
                ingredientsImages={ingredientsImages}
                setIngredientsImages={setIngredientsImages}
              />
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/checkout"
            element={
              <PlaceOrder ingredientsImages={ingredientsImages}  setIngredientsImages={setIngredientsImages} order={order} />
            }
          />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
