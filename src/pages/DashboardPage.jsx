import React from "react";
import logo from "../assets/freelancer project ss.png";

function DashboardPage() {
  const courses = [
    { code: "24DTK47", name: "DESIGN THINKING AND FABRICATION" },
    { code: "24CSK42", name: "DATA STRUCTURES" },
    { code: "24CSLK42", name: "DATA STRUCTURES LAB" },
    { code: "24CSK43", name: "DATABASE MANAGEMENT" },
    { code: "24CSLK44", name: "OPERATING SYSTEM LAB" },
    { code: "24CSK44", name: "OPERATING SYSTEM" },
    { code: "24MAC41", name: "MATHEMATICS" },
    { code: "24CSE452", name: "COURSE CSE452" },
    { code: "24CSE463", name: "COURSE CSE463" },
    { code: "24YOG40", name: "YOGA / WELLNESS" },
  ];

  return (
    <div className="dashboard">
      {/* 🔵 TOP NAVBAR */}
      <div className="topbar">
        <img src={logo} alt="logo" className="logo" />

        <div className="menu">
          <span>HOME</span>
          <span>EXAM HISTORY</span>
          <span>PROCTORSHIP</span>
          <span>EVENTS</span>
          <span>TIME TABLE</span>
          <span>HOLIDAY LIST</span>
          <span>LOGOUT</span>
        </div>
      </div>

      {/* 🔵 PROFILE SECTION */}
      <div className="profile-section">
        <div className="profile-left">
          <h2>ROSHAN SURYANARAYANAN</h2>
        </div>

        <div className="profile-img">
          <img src="https://via.placeholder.com/150" alt="profile" />
        </div>

        <div className="profile-right">
          <p>1NZ24CS176</p>
          <p>B.E-CS, SEM 04, SEC H</p>
          <p>Last Updated On: 04/04/2026</p>
        </div>
      </div>

      {/* 🔵 CARDS */}
      <div className="cards">
        <div className="card">
          <h3>CIE</h3>
          <div className="graph-box">[Graph Here]</div>
        </div>

        <div className="card">
          <h3>
            Attendance <span className="alert">5 BELOW 80%</span>
          </h3>
          <div className="graph-box">[Chart Here]</div>
        </div>
      </div>

      {/* 🔵 TABLE */}
      <div className="table-section">
        <h3>Course registration - CIE and attendance status</h3>

        <table>
          <thead>
            <tr>
              <th>COURSE CODE</th>
              <th>COURSE NAME</th>
              <th>NOTES</th>
              <th>ATTENDANCE</th>
              <th>CIE</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>
                  <button className="btn blue">NOTES</button>
                </td>
                <td>
                  <button className="btn red">ATTENDANCE</button>
                </td>
                <td>
                  <button className="btn green">CIE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔵 FOOTER */}
      <div className="footer">
        <span>Copyright © Powered By Contineo</span>
        <span>Terms of Service | Privacy Policy</span>
      </div>
    </div>
  );
}

export default DashboardPage;
