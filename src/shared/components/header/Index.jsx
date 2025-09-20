// Functionality
import { Link, NavLink } from "react-router-dom";

// Components
import LightDarkToggle from "@shared/components/common/light-dark-toggle/Index";

// Hooks
import switchTheme from "../common/light-dark-toggle/hooks/switchTheme";

import styles from "./index.module.css";
import MenuIcon from "@/assets/icons/MenuIcon.jsx";
import LightModeIcon from "@/assets/icons/LightModeIcon.jsx";
import DarkModeIcon from "@/assets/icons/DarkModeIcon.jsx";
/* 
import LightModeIcon from "@/assets/icons/lightModeIcon";
import DarkModeIcon from "@/assets/icons/DarkModeIcon";
*/

export default function Header() {
  const { theme, toggleTheme } = switchTheme();

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div>
          <NavLink to="/" end className={styles.logoLink}>
            <h1>Company Name</h1>
          </NavLink>
        </div>
        <div className={styles.navBtnContainer}>
          <div className={styles.lightSwitch}>
            <LightDarkToggle />
          </div>
          <button
            className={styles.mobileThemeToggle}
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <DarkModeIcon color={"var(--text)"} />
            <LightModeIcon color={"var(--text)"} />
          </button>

          <MenuIcon
            color={"var(--text)"}
            size={"32px"}
            className={styles.menuIcon}
          />
          <div className={styles.navList}>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about" end>
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
