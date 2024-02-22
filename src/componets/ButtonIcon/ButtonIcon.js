import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ButtonIcon.css";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";
import Brightness5Icon from "@mui/icons-material/Brightness5";

export const ButtonIcon = () => {
  const { theme, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className="button" onClick={toggleDarkMode}>
      {theme === "dark" ? <BedtimeRoundedIcon /> : <Brightness5Icon />}
    </button>
  );
};
