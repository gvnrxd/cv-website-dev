// Functionality
import { Link, NavLink } from "react-router-dom";

// Components
import LightDarkToggle from "@shared/components/common/light-dark-toggle/Index";

import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Company Name</h1>
      <p>NAV BAR</p>
      <LightDarkToggle />
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/about" end>
          About
        </NavLink>
      </nav>
    </header>
  );
}
