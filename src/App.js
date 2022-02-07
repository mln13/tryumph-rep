import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const estadoInicial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();
    this.newValue = this.newValue.bind(this);
    this.saveOnClick = this.saveOnClick.bind(this);
    this.afterSave = this.afterSave.bind(this);
    this.hasTrunfoCard = this.hasTrunfoCard.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      storeCard: [],
      filterCardByName: '',
      filterCardByRarity: '',
      filterByTrunfo: false,
    };
  }

  newValue(event, state) {
    if (event.target.type === 'checkbox') {
      this.setState({
        [state]: event.target.checked,
      });
    } else {
      this.setState({
        [state]: event.target.value,
      }, () => this.isDisabled());
    }
  }

  isDisabled() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardImage } = this.state;
    const numeroLimite = 210;
    const somaAtributos = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const limiteAtributo = 90;
    if (cardName
      && cardDescription
      && cardImage
      && cardRare
      && (somaAtributos <= numeroLimite)
      && cardAttr1 <= limiteAtributo
      && cardAttr1 >= 0
      && cardAttr2 <= limiteAtributo
      && cardAttr2 >= 0
      && cardAttr3 <= limiteAtributo
      && cardAttr3 >= 0) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  saveOnClick() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardImage, cardTrunfo } = this.state;
    this.setState((estadoAnterior) => ({
      storeCard: [...estadoAnterior.storeCard, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardImage,
        cardTrunfo,
      }],
    }));
    this.afterSave();
    if (cardTrunfo) { this.hasTrunfoCard(); }
  }

  afterSave() {
    this.setState({
      ...estadoInicial,
    });
  }

  hasTrunfoCard() {
    this.setState({
      hasTrunfo: true,
    });
  }

  renderMap(array) {
    return array.map((elemento) => (
      <li key={ elemento.cardName }>
        <Card
          cardName={ elemento.cardName }
          cardDescription={ elemento.cardDescription }
          cardAttr1={ elemento.cardAttr1 }
          cardAttr2={ elemento.cardAttr2 }
          cardAttr3={ elemento.cardAttr3 }
          cardImage={ elemento.cardImage }
          cardRare={ elemento.cardRare }
          cardTrunfo={ elemento.cardTrunfo }
        />
        <button
          type="button"
          data-testid="delete-button"
          onClick={ ((event) => {
            this.setState({
              hasTrunfo: false,
            });
            event.target.parentNode.remove();
          }) }
        >
          Excluir
        </button>
      </li>
    ));
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      storeCard,
      filterCardByName,
      filterCardByRarity,
      filterByTrunfo,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.newValue }
          onSaveButtonClick={ this.saveOnClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h2>Todas as Cartas</h2>
        <label htmlFor="FilterName">
          Filtro de Busca
          <input
            id="FilterName"
            type="text"
            disabled={ filterByTrunfo }
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => {
              this.setState({
                filterCardByName: value,
              });
            } }
          />
        </label>
        <label htmlFor="FilterRarity">
          Raridade
          <select
            id="FilterRarity"
            data-testid="rare-filter"
            disabled={ filterByTrunfo }
            onChange={ (event) => {
              this.setState({
                filterCardByRarity: event.target.value,
              });
            } }
          >
            <option value="" selected>todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoCheck">
          Super Trunfo
          <input
            id="trunfoCheck"
            type="checkbox"
            data-testid="trunfo-filter"
            checked={ filterByTrunfo }
            onChange={
              (event) => this.setState({
                filterByTrunfo: event.target.checked,
              })
            }
          />
        </label>
        <ul>
          {filterByTrunfo ? this.renderMap(
            storeCard.filter((elemento) => elemento.cardTrunfo === filterByTrunfo),
          )
            : this.renderMap(
              storeCard.filter((elemento) => (elemento.cardName.includes(filterCardByName)
          && elemento.cardRare.includes(filterCardByRarity))),
            )}
        </ul>
      </div>
    );
  }
}

export default App;
