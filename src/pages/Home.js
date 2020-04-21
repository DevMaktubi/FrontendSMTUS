import React from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

import {InfoBox, WarningMessage} from './styles';

import Header from '../components/Header';

import Hospital from '../assets/hospital.png'

import api from '../services/api';

class Home extends React.Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
    markers: [],
    initialPosX: '',
    initialPosY: '',
    gotPos: false,
  };


  async componentDidMount(){
    console.log('before')
    const response = await api.get('hospital')
    console.log('after')
    const data = response.data;
    
    this.setState({markers: data})
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

  onMarkerClick = async (props, marker, e) => {
    await this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    await localStorage.clear()
    localStorage.setItem('nome', this.state.selectedPlace.nome)
    localStorage.setItem('cnpj', this.state.selectedPlace.cnpj)
    localStorage.setItem('afe', this.state.selectedPlace.afe)
    localStorage.setItem('email', this.state.selectedPlace.email)
    localStorage.setItem('senha', this.state.selectedPlace.senha)
    localStorage.setItem('endereco', this.state.selectedPlace.endereço)
    localStorage.setItem('telefone', this.state.selectedPlace.telefone)
    localStorage.setItem('maxLeitosIsolamento', this.state.selectedPlace.maxLeitosIsolamento)
    localStorage.setItem('leitosIsolamentoOcupados', this.state.selectedPlace.leitosIsolamentoOcupados)
    localStorage.setItem('maxLeitosUti', this.state.selectedPlace.maxLeitosUti)
    localStorage.setItem('leitosUtiOcupados', this.state.selectedPlace.leitosUtiOcupados)
    console.log(this.state.selectedPlace)
  }
  


  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  setRedirect = () => {
    this.props.history.push("/infohospital")
  }

  Porcentagem(num1,num2) {
    return Math.floor((num1 * 100) / num2);
  }

  

  render(){
    
    if(!this.state.gotPos){
      return(
        <WarningMessage>
          <h1>Carregando</h1>
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>(Certifique-se de que você permitiu acesso à sua localização.)</p>
        </WarningMessage>
      )
    }else{
      return(
        <>
          <Header />
          <Map
            google={this.props.google}
            zoom={14}
            initialCenter={{
            lat: this.state.initialPosX,
            lng: this.state.initialPosY
            }}
            style={{width: '100%', height: "100%", position: "absolute"}}
          >
            {this.state.markers.map( mark => (
                <Marker
                  key={mark.latitude}
                  name={mark.nome}
                  position={{lat: mark.latitude, lng: mark.longitude}}
                  onClick={this.onMarkerClick}
                  porcentagemLeitosUtiOcupados={this.Porcentagem(mark.leitosUtiOcupados,mark.maxLeitosUti)}
                  redirector={true}
                  longitude={mark.longitude}
                  latitude={mark.latitude}
                  email={mark.email}
                  afe={mark.afe}
                  senha={mark.senha}
                  nome={mark.nome}
                  endereço={mark.endereço}
                  telefone={mark.telefone}
                  maxLeitosIsolamento={mark.maxLeitosIsolamento}
                  leitosIsolamentoOcupados={mark.leitosIsolamentoOcupados}
                  maxLeitosUti={mark.maxLeitosUti}
                  leitosUtiOcupados={mark.leitosUtiOcupados}
                  cnpj={mark.cnpj}
              />
            ))}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
              onOpen={this.setRedirect}
            >
              <InfoBox leitosUsados={this.state.selectedPlace.porcentagemLeitosUtiOcupados} >
                <img src={Hospital} alt="Hospital" />
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                  {this.state.selectedPlace.porcentagemLeitosUtiOcupados ? <p>Porcentagem de leitos UTI sendo usados: <strong>{this.state.selectedPlace.porcentagemLeitosUtiOcupados}%</strong></p> : <> </>}
                  <button onClick={this.setRedirect}>teste</button>
                </div>
              </InfoBox>
            </InfoWindow>
          </Map>
        </>
      );
    }
    
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBP1oh-8P2tbt3AV2X3KwXttpxtn8wRhVU"
})(Home)
