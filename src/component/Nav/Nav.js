import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="list">
        <li>
          <Link className="link" to="/Login">
            Login
          </Link>
        </li>

        <li>
          <Link className="link" to="/Record">
            Record
          </Link>
        </li>
      </ul>
    </nav>
  );
}
