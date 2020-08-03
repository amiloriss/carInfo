import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CarConsumer } from '../../context/context';
import './storepage.scss';

const StorePage = () => {
  return (
    <div>
      <Row>
        <CarConsumer>
          {value =>
            value.loading ? (
              value.cars.length !== 0 ? (
                value.cars.map((el, id) => {
                  return (
                    <Col className="card-product" xs={4} key={id}>
                      <Card className="mt-4">
                        <Card.Img
                          className="card__image"
                          variant="top"
                          src={el.image_link}
                        />
                        <Card.Body>
                          <img
                            className="d-block mx-auto"
                            style={{ width: '40px' }}
                            src={el.car_make}
                            alt=""
                          />
                          <hr />
                          <Card.Title className="text-capitalize text-center">
                            {el.model}
                          </Card.Title>
                          <Card.Text>Стоимость: {el.cost} &#8381;</Card.Text>

                          <Link to="/details">
                            <Button
                              variant="info"
                              onClick={() => value.handleCarDetail(id)}
                            >
                              Узнать больше
                            </Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <div>Ничего не найдено</div>
              )
            ) : (
              <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            )
          }
        </CarConsumer>
      </Row>
    </div>
  );
};

export default StorePage;
