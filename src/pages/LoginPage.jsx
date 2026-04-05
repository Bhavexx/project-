import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftSection from "../components/LeftSection";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // correct credentials
    if (
      username === "1NZ24CS176" &&
      day === "26" &&
      month === "Dec" &&
      year === "2005"
    ) {
      setError("");
      navigate("/verify");
    } else {
      setError("Invalid Username or Date of Birth ❌");
    }
  };

  return (
    <div className="container">
      <LeftSection />

      <div className="right">
        <div className="login-card">
          <h2>Login to Your Account</h2>

          {/* USERNAME */}
          <label>Username</label>
          <input
            type="text"
            placeholder="USN"
            value={username}
            onChange={(e) => setUsername(e.target.value.toUpperCase())}
          />

          {/* DOB */}
          <label>Password</label>
          <div className="dob">
            <select value={day} onChange={(e) => setDay(e.target.value)}>
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>

            <select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="">Month</option>
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Year</option>
              {[...Array(30)].map((_, i) => (
                <option key={i}>{1995 + i}</option>
              ))}
            </select>
          </div>

          <p className="help-text">
            Kindly contact your department coordinator's to reset your password
          </p>

          {/* ERROR MESSAGE */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button onClick={handleLogin}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
