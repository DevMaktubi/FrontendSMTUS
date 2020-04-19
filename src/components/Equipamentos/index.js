import React from 'react';
import api from '../../services/api';

import { EquipamentosContainer, Container } from './styles';

export default class Internacoes extends React.Component {
  state = {
    equipamentos: []
  }
  Porcentagem(num1,num2) {
    return Math.floor((num1 * 100) / num2);
  }
  async componentDidMount(){
    const cnpj = localStorage.getItem('cnpj')
    const response = await api.get('equipamentoId', {
      headers: {
        cnpj
      }
    })
    this.setState({equipamentos: response.data})
  }
  render(){
    
    return (
      <Container>
        <EquipamentosContainer>
          <div className="infobar">
            <h1>Equipamento</h1>
            <h1>Quantidade Disponível</h1>
            <h1>Porcentagem</h1>
          </div>
          {this.state.equipamentos ? this.state.equipamentos.map(equip => (
            <div className="item">
              <h2>{equip.nomeEquipamento}</h2>
              <h2>{equip.qtdTotal - equip.qtdEmUso}</h2>
              <h2 className="lastItem">{this.Porcentagem(equip.qtdEmUso,equip.qtdTotal)}%</h2>
          </div>
          )) : <div>Não tem equipamentos disponíveis.</div>}
        </EquipamentosContainer>
      </Container>
      
    );
  }
}
