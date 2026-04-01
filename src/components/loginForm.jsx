function LoginForm() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
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
  ];

  const years = [];
  for (let i = 1990; i <= 2025; i++) {
    years.push(i);
  }

  return (
    <div className="right">
      <div className="login-card">
        <h2>Login to Your Account</h2>

        <label>Username</label>
        <input type="text" placeholder="USN" />

        <label>Password</label>
        <div className="dob">
          <select>
            {days.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </select>

          <select>
            {months.map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>

          <select>
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        <p className="help-text">
          Kindly contact your department coordinator's to reset your password
        </p>

        <button>LOGIN</button>
      </div>
    </div>
  );
}

export default LoginForm;
