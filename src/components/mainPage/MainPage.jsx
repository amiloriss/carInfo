import React from 'react';
import { Link } from 'react-router-dom';
import './mainpage.scss';

const MainPage = () => {
  return (
    <div
      style={{ height: '80vh' }}
      className="d-flex flex-column justify-content-center align-items-center bg-light-gray"
    >
      <h1 className="text-uppercase text-center greeting">
        добро пожаловать на наш сайт
      </h1>
      <h2 className="text-uppercase text-center sub-greeting">
        <Link className="text-info" to="store">
          перейти к выбору
        </Link>
      </h2>
    </div>
  );
};

export default MainPage;
