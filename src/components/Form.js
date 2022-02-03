import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <label htmlFor="nome">
          Texto
          <input
            id="nome"
            type="text"
            value={ cardName }
            onChange={ (event) => onInputChange(event, 'cardName') }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descricao">
          <input
            id="descricao"
            value={ cardDescription }
            onChange={ (event) => onInputChange(event, 'cardDescription') }
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="atributo1">
          Primeiro Atributo
          <input
            id="atributo1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ (event) => onInputChange(event, 'cardAttr1') }
          />
        </label>
        <label htmlFor="atributo2">
          Segundo Atributo
          <input
            id="atributo2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ (event) => onInputChange(event, 'cardAttr2') }
          />
        </label>
        <label htmlFor="atributo3">
          Terceiro Atributo
          <input
            id="atributo3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ (event) => onInputChange(event, 'cardAttr3') }
          />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            id="imagem"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ (event) => onInputChange(event, 'cardImage') }
          />
        </label>
        <label htmlFor="raridade">
          Raridade
          <select
            id="raridade"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ (event) => onInputChange(event, 'cardRare') }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {
          hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
            <label htmlFor="trunfo">
              Trunfo?
              <input
                id="trunfo"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ (event) => onInputChange(event, 'cardTrunfo') }
              />
            </label>
          )
        }
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.string.isRequired,
  onInputChange: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.string.isRequired,
};

export default Form;
