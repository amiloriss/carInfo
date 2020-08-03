import React from 'react';
import Nav from '../nav/Nav';
import SearchPanel from '../searchPanel/Search';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <Row>
      <header className="bg-dark d-flex w-100 justify-content-around align-items-center text-white py-2 header">
        <h1 className="text-uppercase my-0 title-website">
          <Link to="/">Car Store</Link>
        </h1>
        <Nav />
        <SearchPanel />
      </header>
    </Row>
  );
};

export default Header;
