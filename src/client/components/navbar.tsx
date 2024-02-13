import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-secondary">
      <Link
        className="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
        to={"/chirps"}
      >
        Home
      </Link>
      <Link
        className="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
        to={"/chirps/createChirp"}
      >
        Create
      </Link>
      <Link
        className="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
        to={"/admin"}
      >
        Admin
      </Link>
    </div>
  );
};

export default Navbar;
