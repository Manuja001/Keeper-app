import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <p>Copyright © {currentYear} </p>
      </div>
    </footer>
  );
}
export default Footer;
