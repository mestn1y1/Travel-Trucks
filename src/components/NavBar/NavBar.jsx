import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import logo from "../../assets/TravelTrucksLogo.svg";
import css from "./NavBar.module.css";
const getClassName = (props) => {
  return clsx(css.link, props.isActive && css.isActive);
};

export default function NavBar() {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logoLink}>
        <img src={logo} alt="logo" className={css.logo} />
      </Link>
      <ul className={css.navList}>
        <li>
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={getClassName}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={getClassName}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
