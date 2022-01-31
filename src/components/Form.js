import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="nome">
          Texto
          <input id="nome" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="descricao">
          <input id="descricao" type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="atributo1">
          Primeiro Atributo
          <input id="atributo1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="atributo2">
          Segundo Atributo
          <input id="atributo2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="atributo3">
          Terceiro Atributo
          <input id="atributo3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input id="imagem" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="raridade">
          Raridade
          <select id="raridade" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Trunfo?
          <input id="trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
