import React, { createContext, Component } from 'react';
import axios from 'axios';

const CarContext = createContext();

class CarProvider extends Component {
  state = {
    cars: [],
    loading: false,
    searchCar: '',
    carDetail: {}
  };
  async componentDidMount() {
    const response = await axios.get(
      'https://car-store-d56f4.firebaseio.com/cars.json'
    );
    const cars = Object.values(response.data);
    this.setState({ cars, loading: true });
  }
  handleInput = e => {
    this.setState({
      searchCar: e.target.value
    });
  };
  getItem = id => {
    const car = this.state.cars.find(car => car.id === id);
    return car;
  };

  handleCarDetail = id => {
    const car = this.getItem(id);
    this.setState(() => {
      return { carDetail: car };
    });
  };

  render() {
    let filteredCars = this.state.cars.filter(car => {
      return car.model
        .toLowerCase()
        .includes(this.state.searchCar.toLowerCase());
    });

    return (
      <CarContext.Provider
        value={{
          cars: filteredCars,
          carDetail: this.state.carDetail,
          loading: this.state.loading,
          handleInput: this.handleInput,
          handleCarDetail: this.handleCarDetail
        }}
      >
        {this.props.children}
      </CarContext.Provider>
    );
  }
}

const CarConsumer = CarContext.Consumer;

export { CarProvider, CarConsumer };
