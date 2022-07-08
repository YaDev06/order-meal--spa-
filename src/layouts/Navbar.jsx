import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-secondary">
        <div className="container">
          <Link className="navbar-brand mb-0 h1" to="/">
            The Meal DB
          </Link>

          <div className="d-flex justify-content-around">
            <a
              href="https://t.me/YaDev_06"
              className="nav-link active text-white"
            >
              Telegram
            </a>
            <a
              href="https://mail.google.com/mail/u/yahyoxonmuhammadaliyev567@gmail.com"
              className="nav-link active text-white"
            >
              Gmail
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;