import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/iamges/logo.png';
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="logo-text">
          <b>DUBAI</b>
          <b>DESERT</b>
          <b>SAFARI</b>
        </div>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="item">
            <Link className="nav-link" to="/">
              <i className="bi bi-house-fill"></i>
              Home
            </Link>
          </li>

          <li className="item">
            <Link className="nav-link" to="/about">
              <i className="bi bi-bank2"></i>
              About
            </Link>
          </li>

          <li className="item">
            <Link className="nav-link" to="/books">
              <i className="bi bi-arrow-right-square-fill"></i>
              Login
            </Link>
          </li>

          <li className="item">
            <Link className="nav-link" to="/register">
              <i className="bi bi-person-plus-fill"></i>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
