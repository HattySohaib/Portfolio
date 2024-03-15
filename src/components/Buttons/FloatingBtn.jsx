import React from "react";
import "./Buttons.css";
import { motion } from "framer-motion";
import useTheme from "../../contexts/theme";

function FloatingBtn({ onClick }) {
  const { themeMode } = useTheme();
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.2, x: -10, y: -10 }}
      id="floating-btn"
      className={`btn-${themeMode}`}
    >
      <span class="material-symbols-rounded">north</span>
    </motion.button>
  );
}

export default FloatingBtn;
