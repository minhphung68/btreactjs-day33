import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink
                to="/"
                className={({ isActive }) => 
                    isActive ? styles.activeLink : undefined
            }
                >
                    Home
                </NavLink>
                <NavLink
                to="/news"
                className={({ isActive }) => isActive ? styles.activeLink : undefined}
                >
                    News
                </NavLink>
                <NavLink
                to="/about"
                className={({ isActive}) => isActive ? styles.activeLink : undefined}
                >
                    About
                </NavLink>
            </nav>
        </header>
    );
}

export default Header