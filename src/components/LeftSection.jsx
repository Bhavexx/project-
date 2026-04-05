import logo from "../assets/freelancer project ss.png";

function LeftSection() {
  return (
    <div className="left">
      <div className="header">
        <img src={logo} alt="logo" />
      </div>

      <div className="content">
        <h2>Welcome to NHCE</h2>
        <p>
          The New Horizon College of Engineering is an autonomous private
          engineering college located near Marathahalli, in Bangalore, India.
          Established in 2001...
        </p>

        <div className="notice">
          <h3>Notice Board</h3>
          <textarea placeholder="No notices available..." />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
