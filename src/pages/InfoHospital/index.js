import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';


import { InfoContainer, PageController } from './styles';

import Internacoes from '../../components/Internacoes';
import Equipamentos from '../../components/Equipamentos';
import Contato from '../../components/Contato';

class InfoHospital extends React.Component {
  state = {
    initialPosX: '',
    initialPosY: '',
    gotPos: false,
    selectedThing: 'Internacoes',
    nome: '',
    endereco: '',
    cnpj: '',
    telefone: '',
    email: '',
    senha: '',
    afe: '',
    maxLeitosIsolamento: '',
    leitosIsolamentoOcupados: '',
    maxLeitosUti: '',
    leitosUtiOcupados: '',
    componenteEscolhido: 3,
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
      await this.setState({
        nome: localStorage.getItem('nome'),
        endereco: localStorage.getItem('endereco'),
        cnpj: localStorage.getItem('cnpj'),
        telefone: localStorage.getItem('telefone'),
        email: localStorage.getItem('email'),
        senha: localStorage.getItem('senha'),
        afe: localStorage.getItem('afe'),
        maxLeitosIsolamento: localStorage.getItem('maxLeitosIsolamento'),
        leitosIsolamentoOcupados: localStorage.getItem('leitosIsolamentoOcupados'),
        maxLeitosUti: localStorage.getItem('maxLeitosUti'),
        leitosUtiOcupados: localStorage.getItem('leitosUtiOcupados'),
      })



  }
  redirect = (num) => {
    this.setState({componenteEscolhido: num})
  }
  componenteAtivo(num){
    if(num === 1){
      return <Internacoes />
    }
    if(num === 2){
      return <Equipamentos />
    }
    if(num === 3){
      return <Contato />
    }
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
        <InfoContainer>
          <PageController>
            <h1>{this.state.nome}</h1>
            <div>
              <h2 onClick={() => this.redirect(1)}>Internações</h2>
              <h2 onClick={() => this.redirect(2)}>Equipamentos</h2>
              <h2 onClick={() => this.redirect(3)}>Contato</h2>
            </div>
          </PageController>
          {this.componenteAtivo(this.state.componenteEscolhido)}
        </InfoContainer>
  
      </Map>
    );
  }
  }
  

export default GoogleApiWrapper({
  apiKey: "AIzaSyBP1oh-8P2tbt3AV2X3KwXttpxtn8wRhVU"
})(InfoHospital)
