import React from 'react';
import { CarConsumer } from '../../context/context';
import './search.scss';

const SearchPanel = () => {
  return (
    <CarConsumer>
      {value => {
        return (
          <form style={{ position: 'relative' }} className="d-flex">
            <i
              style={{
                position: 'absolute',
                top: '50%',
                right: '0',
                transform: 'translate(-50%, -50%)',
                color: '#555',
                fontSize: '20px'
              }}
              className="fas fa-search searching-icon"
            ></i>
            <input
              maxLength="18"
              placeholder="поиск..."
              style={{
                fontSize: '15px',
                width: '200px',
                textTransform: 'uppercase',
                padding: '0px 5px'
              }}
              className="form-control mr-sm-2 searching"
              type="text"
              onChange={value.handleInput}
            />
          </form>
        );
      }}
    </CarConsumer>
  );
};

export default SearchPanel;
