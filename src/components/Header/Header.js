import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.title} to={"/"}>
        Beers
      </Link>
    </div>
  );
};

export default Header;
