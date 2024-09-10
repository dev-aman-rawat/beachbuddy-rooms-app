import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-center">
        <span>
          &copy; beachbuddy-rooms.netlify.app
          <span> {new Date().getFullYear()}</span>
        </span>
        <span style={{ textDecoration: "none", marginLeft: "5px" }}>
          Built by
          <a
            style={{
              textDecoration: "none",
              marginLeft: "5px",
              color: "steelblue",
            }}
            href="github.com/dipanshurdev"
          >
            Dipanshu Rawat
          </a>
        </span>
      </div>
    </footer>
  );
}
