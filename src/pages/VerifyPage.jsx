import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftSection from "../components/LeftSection";

function VerifyPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (code === "SURY4239") {
      navigate("/dashboard");
    } else {
      setError("Invalid Code ❌");
    }
  };

  return (
    <div className="container">
      <LeftSection />

      <div className="right">
        <div className="login-card">
          <h2>Enter the Login Code</h2>

          <input
            type="text"
            placeholder="Enter Code"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
          />

          <p className="help-text">
            First 4 letters of father name and last 4 digits of Aadhaar (In
            Uppercase)
          </p>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default VerifyPage;
