import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles["nav-active"] : ""
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles["nav-active"] : ""
                        }
                        to="/About"
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles["nav-active"] : ""
                        }
                        to="/characters"
                    >
                        Characters
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles["nav-active"] : ""
                        }
                        to="/Invalid"
                    >
                        Invalid URL
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
