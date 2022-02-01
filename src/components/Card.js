import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardTrunfo,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.props;
    return (
      <div>
        <h3 data-testid="name-card">{cardName}</h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <div data-testid="description-card">{cardDescription}</div>
        <div data-testid="attr1-card">{cardAttr1}</div>
        <div data-testid="attr2-card">{cardAttr2}</div>
        <div data-testid="attr3-card">{cardAttr3}</div>
        <div data-testid="rare-card">{cardRare}</div>
        {
          cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
};

export default Card;
