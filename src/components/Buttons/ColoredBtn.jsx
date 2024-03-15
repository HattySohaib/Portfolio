import React from "react";
import "./Buttons.css";
import useTheme from "../../contexts/theme";
import { NavLink } from "react-router-dom";

function ColoredBtn({ href, text, icon }) {
  const { themeMode } = useTheme();
  return (
    <NavLink className="nav-link" to={href}>
      <div className={`colored-btn btn-${themeMode}`}>
        <p className="btn-text">{text}</p>
        <div className="btn-circle">
          <span className="material-symbols-rounded icon">{icon}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default ColoredBtn;
