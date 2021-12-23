import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './index.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to="/" className={styles.header__content_logo}>
          Torvic
        </Link>
        <nav
          className={`${styles.header__content_nav} ${
            menuOpen ? styles.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__content_toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <BiMenuAltRight onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
