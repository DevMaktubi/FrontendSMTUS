import React from 'react';
import api from '../../services/api';
import {Map, GoogleApiWrapper} from 'google-maps-react';

import { LoginContainer } from './styles';
import { Redirect } from 'react-router-dom';

import arrow from '../../assets/arrowleft.png'


class Login extends React.Component {
  state = {
    initialPosX: '',
    initialPosY: '',
    gotPos: false,
    redirecting: false,
    email: '',
    password: '',
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
  setRedirect = () => {
    this.setState({
      redirecting: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirecting) {
      return <Redirect to="/equipamentos" />
    }
  }
  handleLogin = async e => {
    const {email, senha} = this.state;
    console.log(email, senha)
    try {
      await api.get('login', {
        headers: {
          email: email,
          senha: senha
        }
      })
      this.props.history.push('/')
    }catch(e){
      alert("Erro no login")
    }
  }
  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  render(){
    if(!this.state.gotPos) {
      return (
        <>
          {this.renderRedirect()}
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
        <LoginContainer>
          <div className="wrapper">
            <button><img src={arrow} alt="arrow" onClick={() => this.props.history.push('/')} /></button>
            <h1>Bem Vindo</h1>
          </div>
          <p>Junte-se a nós, na missão em combate ao novo coronavírus</p>
          <div>
            <input type="text" onChange={this.handleChange} name="email" value={this.state.email} placeholder="E-mail" />
            <input type="password" onChange={this.handleChange} name="senha" value={this.state.senha} placeholder="Senha" />
          </div>
          <h6>Esqueci a senha</h6>
          <button onClick={this.handleLogin}>Entrar</button>
        
        </LoginContainer>
  
      </Map>
    );
  }
  }
  

export default GoogleApiWrapper({
  apiKey: "AIzaSyBP1oh-8P2tbt3AV2X3KwXttpxtn8wRhVU"
})(Login)
