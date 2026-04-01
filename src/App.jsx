import React from "react";
import LeftSection from "./components/leftSection";
import LoginForm from "./components/loginForm";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <LeftSection />
      <LoginForm />
    </div>
  );
};

export default App;
