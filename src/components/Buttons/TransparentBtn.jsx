import React from "react";
import useTheme from "../../contexts/theme";

function TransparentBtn({ text, icon }) {
  const { themeMode } = useTheme();
  return (
    <div className={`transparent-btn btn-${themeMode}`}>
      <p className="btn-text">{text}</p>
      <div className="btn-circle">
        <span className="material-symbols-rounded icon">{icon}</span>
      </div>
    </div>
  );
}

export default TransparentBtn;
