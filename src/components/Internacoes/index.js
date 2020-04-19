import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

import { InternacoesContainer, Container } from './styles';


export default function Internacoes() {
  const [fila, setarFila] = useState()
  useEffect(() => {
    api.get('filaespera').then(({data}) => {setarFila(data)})
  })
  let history = useHistory();
  function Porcentagem(num1,num2) {
    return Math.floor((num1 * 100) / num2);
  }
  return (
    <Container>
      <InternacoesContainer>
        <div>
            <h1>Leitos de isolamento ocupados: <span>{localStorage.getItem('leitosIsolamentoOcupados')}</span> </h1>
            <h1>Porcentagem <span>{Porcentagem(localStorage.getItem('leitosIsolamentoOcupados'),localStorage.getItem('maxLeitosIsolamento'))}%</span></h1>
        </div> 
        <div>
        <h1>Leitos de UTI ocupados: <span>{localStorage.getItem('leitosUtiOcupados')}</span> </h1>
          <h1>Porcentagem <span>{Porcentagem(localStorage.getItem('leitosUtiOcupados'),localStorage.getItem('maxLeitosUti'))}%</span></h1>
        </div> 
      </InternacoesContainer>
      <div className="second">
            <h1>Aguardando Atendimento: <span>{fila}</span> </h1>
            <h1>Tempo por atendimento <span>15 min</span></h1>
      </div>
      <button onClick={() => history.push('/atendimento')}>Reservar Atendimento</button>
      <span>Você será atendido em {fila *15} minutos</span>
    </Container>
    
  );
}
