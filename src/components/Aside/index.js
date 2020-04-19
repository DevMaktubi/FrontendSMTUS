import React, { Component } from 'react';

import { AsideContainer, HistoryBlock } from './styles';

import arrow from '../../assets/arrow.webp'

export default class Aside extends Component {
  render() {
    return (
      <AsideContainer>
        <input type="text" placeholder="Busque um endereço"/>
        <HistoryBlock>
          <div>
            <h1>Hospital 9 de Julho</h1>

            <p>Rua Peixoto Gomide, 545 - SP, 01409-002</p>
          </div>
          <img src={arrow} alt="Arrow" />
        </HistoryBlock>
        <HistoryBlock>
          <div>
            <h1>Hospital Samaritano</h1>

            <p>R. Conselheiro Brotero, 1486 - Higienópolis, São Paulo - SP, 01232-010</p>
          </div>
          <img src={arrow} alt="Arrow" />
        </HistoryBlock>
        <HistoryBlock>
          <div>
            <h1>Hospital Santa Isabel</h1>

            <p>Rua Dona Verdiana, 311 - Higienópolis, São Paulo - SP, 01238-010</p>
          </div>
          <img src={arrow} alt="Arrow" />
        </HistoryBlock>
      </AsideContainer>
    )
  }
}
