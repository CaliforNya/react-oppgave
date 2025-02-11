import { useState } from "react";

const CookieClicker = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#ff9900", fontSize: "2rem" }}>Cookie Clicker</h1>

      <button
        onClick={handleClick}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          outline: "none",
        }}
      >
        <img
          src="cookie.png"
          alt="Image of a Cookie"
          style={{
            width: "150px",
            height: "150px",
            transition: "transform 0.1s ease",
          }}
        />{" "}
      </button>

      <p style={{ fontSize: "1.5rem", marginTop: "10px", color: "#333" }}>
        {count} cookies
      </p>
    </div>
  );
};

export default CookieClicker;
