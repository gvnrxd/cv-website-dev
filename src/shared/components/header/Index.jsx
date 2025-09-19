// Functionality
import { Link, NavLink } from "react-router-dom";

// Components
import LightDarkToggle from "@shared/components/common/light-dark-toggle/Index";

import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <NavLink to="/" end className={styles.logoLink}>
          <h1>Company Name</h1>
        </NavLink>
        <LightDarkToggle />

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
