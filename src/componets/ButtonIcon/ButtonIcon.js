import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ButtonIcon.css";
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';

export const ButtonIcon = () => {
  const { theme, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className="button" value={theme} onClick={toggleDarkMode}>
      <BedtimeRoundedIcon/>
    </button>
  );
};
