import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import { useTheme } from "../../context/ThemeContext";

import "./Greenhouse.css";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

function Greenhouse() {
  const { themeName } = useTheme();
  const srcImage = themeName === "day" ? dayImage : nightImage;
  return (
    <section>
      <img className="greenhouse-img" src={srcImage} alt="greenhouse" />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
