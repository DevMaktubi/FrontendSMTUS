import React from 'react';
import api from '../../services/api';

import {Map, GoogleApiWrapper} from 'google-maps-react';


import { AtendimentoContainer, Title } from './styles';

class Atendimento extends React.Component {
  state = {
    initialPosX: '',
    initialPosY: '',
    gotPos: false,
    nome: '',
    cpf: '',
    rg: '',
    nascimento: '',
    endereco: '',
    telefone: '',
    celular: '',
    carteirinha: ''

  }
  async componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        this.setState({initialPosX: latitude})
        this.setState({initialPosY: longitude})
        this.setState({gotPos: true})

      },
      (err) => {
        console.log(err);
      })


  }
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = async e => {
    e.preventDefault();
    const {nome, rg, carteirinha, cpf, nascimento, endereco, telefone, celular} = this.state;
    await api.post('usuario/new', {
      nome,
      rg,
      carteirinha,
      cpf,
      dataNascimento: nascimento,
      endereço: endereco,
      telefone,
      celular
    })
    await api.post('agendamento/new', {
      cpf,
      cnpj: localStorage.getItem('cnpj')
    })
    this.props.history.push('/')

  }
  render(){
    if(!this.state.gotPos) {
      return (
        <>
          <h1>Você deve permitir as suas coordenadas para que a plataforma funcione.</h1>
          <p>Estamos Aguardando...</p>
        </>
      )
    }
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
        lat: this.state.initialPosX,
        lng: this.state.initialPosY
        }}
        style={{width: '100%', height: "100%", position: "absolute"}}
      >
        <AtendimentoContainer>
          <Title>
            Reservar Atendimento
          </Title>
          <div className="full">
            <label>Nome Completo</label>
            <input name="nome" type="text" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="splitted">
            <div>
              <label>Nascimento</label>
              <input name="nascimento" onChange={this.handleChange} type="text" placeholder="dd/mm/aa" value={this.state.nascimento}/>
            </div>
            <div>
              <label>RG</label>
              <input name="rg" onChange={this.handleChange} value={this.state.rg} type="text" />
            </div>
            <div>
              <label>CPF</label>
              <input name="cpf" onChange={this.handleChange}  value={this.state.cpf} type="text" />
            </div>
          </div>
          <div className="doisporum">
            <div>
              <label>Endereço</label>
              <input name="endereco" onChange={this.handleChange} value={this.state.endereco} className="extended" type="text" />
            </div>
            <div>
              <label>Telefone</label>
              <input name="telefone" onChange={this.handleChange} value={this.state.telefone} type="text" />
            </div>
          </div>
          <div className="umpordois">
            <div>
              <label>Celular</label>
              <input name="celular" onChange={this.handleChange} value={this.state.celular} type="text" />
            </div>
            <div>
              <label>Numero do Convênio</label>
              <input name="carteirinha" onChange={this.handleChange} className="extended" value={this.state.carteirinha} type="text" />
            </div>
            
          </div>
          <button onClick={this.handleSubmit}>Confirmar</button>
        </AtendimentoContainer>
  
      </Map>
    );
  }
  }
  

export default GoogleApiWrapper({
  apiKey: "AIzaSyBP1oh-8P2tbt3AV2X3KwXttpxtn8wRhVU"
})(Atendimento)
