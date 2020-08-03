import React, { Component, Fragment } from 'react';
import Header from '../components/header/Header';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../components/mainPage/MainPage';
import StorePage from '../components/storePage/StorePage';
import CarDetails from '../components/carDetails/CarDetails';
import { Container } from 'react-bootstrap';
import './app.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/store" component={StorePage} />
            <Route path="/details" component={CarDetails} />
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
