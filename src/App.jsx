import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginForm";
import VerifyPage from "./pages/VerifyPage";
import DashboardPage from "./pages/DashboardPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
