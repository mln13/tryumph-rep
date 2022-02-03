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
      </div>
    );
  }
}

export default App;
