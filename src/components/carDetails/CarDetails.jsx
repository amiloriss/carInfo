import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { CarConsumer } from '../../context/context';
import './cardetails.scss';

const CarDetails = () => {
  return (
    <CarConsumer>
      {value => {
        const {
          car_make,
          cost,
          drivetrain,
          engine_capacity,
          engine_power,
          image_link,
          max_speed,
          model,
          transmission
        } = value.carDetail;

        return (
          <div className="pt-4 py-3">
            <Card
              className="details-card"
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <Card.Img
                className="details-card__image top-image"
                variant="top"
                src={image_link}
              />
              <Card.Body>
                <Card.Title className="text-center text-capitalize">
                  {model}
                  <img
                    style={{ width: '30px', marginLeft: '5px' }}
                    src={car_make}
                    alt=""
                  />
                </Card.Title>
                <h6 className="text-uppercase my-3 py-2">характеристики</h6>
                <ul className="specifications">
                  <li>
                    <p>Макс. скорость</p> <p>{max_speed} км/ч</p>
                  </li>
                  <hr />
                  <li>
                    <p>Привод</p> <p>{drivetrain}</p>
                  </li>
                  <hr />
                  <li>
                    <p>Вместимость двигателя</p> <p>{engine_capacity} л.</p>
                  </li>
                  <hr />
                  <li>
                    <p>Мощность двигателя</p> <p>{engine_power} л.c</p>
                  </li>
                  <hr />
                  <li>
                    <p>Трансмиссия</p> <p>{transmission}</p>
                  </li>
                  <hr />
                  <li>
                    <p>Стоимость</p> <p>{cost}</p>
                  </li>
                </ul>
              </Card.Body>
              <Card.Img
                className="details-card__image bottom-image"
                variant="top"
                src={image_link}
              />
            </Card>
            <Link to="/store">
              <Button className="mt-3 btn-to-back" variant="info">
                Назад
              </Button>
            </Link>
          </div>
        );
      }}
    </CarConsumer>
  );
};

export default CarDetails;
