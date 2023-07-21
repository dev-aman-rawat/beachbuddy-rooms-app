import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-center">
        <span>
          &copy; BeachBuddy.com
          <span> {new Date().getFullYear()}</span>
        </span>
      </div>
    </footer>
  );
}
