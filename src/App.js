import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#5A4FCF";
      showAlert("Switched to dark mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Switched to light mode", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          title="TextUtils"
          about="About"
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact path="/"
              element={
                <Form heading="Enter Your text here" showAl={showAlert} mode={mode} />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
