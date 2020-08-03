import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul className="d-flex text-capitalize my-0">
        <li className="mx-2">
          <Link to="/">главная</Link>
        </li>
        <li className="mx-2">
          <Link to="/store">автомобили</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
