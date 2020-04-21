import React from 'react';
import api from '../../services/api';


import { ContatoContainer, CardHorizontal, CardVertical } from './styles';

export default class Contato extends React.Component {
  state = {
    dadosResponsavel: [],
    diasAbertos: []
  }
  async componentDidMount(){
    const cnpj = localStorage.getItem('cnpj')
    try {
      const response = await api.get('responsavelTecnico', {
        headers: {
          cnpj
        }
      })
      this.setState({dadosResponsavel: response.data[0]})
      console.log("Data: " + response.data)
    }catch(e){
      console.log("erro:" + e);
    }

    const responsedois = await api.get('horariofuncionamentoId', {
      headers: {
        cnpj
      }
    })
    this.setState({diasAbertos: responsedois.data})
  }
  formatarNumero = (numero) => {

    let telefoneFormatado = '(' + numero.substring(0,2) + ') ' + numero.substring(2, 7) + '-' + numero.substring(7, 11);
    return telefoneFormatado
  }
  formatarTelefone = (numero) => {

    let telefoneFormatado = '(' + numero.substring(0,2) + ') ' + numero.substring(2, 6) + '-' + numero.substring(7, 11);
    return telefoneFormatado
  }
  render(){
    const {celular} = this.state.dadosResponsavel
    return (
      <ContatoContainer>
        <p>Doe para os hospitais da sua região e ajuda a salvar vidas! Proteja-se!</p>
        <div>
          <div>
            <CardHorizontal>
              <h1>{localStorage.getItem('nome')}</h1>
              <div>
                <h2>CNPJ: {localStorage.getItem('cnpj')}</h2>
                <h2>AFE: {localStorage.getItem('afe')}</h2>
                <h2 className="extended">Endereço: {localStorage.getItem('endereco')}</h2>
              </div>
            </CardHorizontal>
            <CardHorizontal>
              <h1>Responsável Técnico</h1>
              <div>
                <h2>NOME DO RESPONSÁVEL: {this.state.dadosResponsavel.nome}</h2>
                <h2>CRF: {this.state.dadosResponsavel.crf}</h2>
                <h2>Email: {this.state.dadosResponsavel.email}</h2>
                <h2>Telefone: {this.formatarTelefone(localStorage.getItem('telefone'))},  {this.formatarNumero(`${celular}`)} </h2>
              </div>
            </CardHorizontal>
          </div>
          <CardVertical>
            <h1>Horário de Funcionamento</h1>
            <div>
              {this.state.diasAbertos.map(diaSemana => {
                  let dia;
                  switch (diaSemana.diaSemana) {
                    case 1:
                      dia = "Domingo"
                      break;
                    case 2:
                      dia = "Segunda-Feira"
                      break;
                    case 3:
                      dia = "Terça-Feira"
                      break;
                    case 4:
                      dia = "Quarta-Feira"
                      break;
                    case 5:
                      dia = "Quinta-Feira"
                      break;
                    case 6:
                      dia = "Sexta-Feira"
                      break;
                    case 7:
                      dia = "Sábado"
                      break;
                    default:
                      dia = "???????"
                }
                return (
                  <h2 key={diaSemana.diaSemana}>{dia} {diaSemana.horaAbertura} - {diaSemana.horaFechamento}</h2>
                )
              })}
            </div>
          </CardVertical>
        </div>
      </ContatoContainer>
    );
  }
}
