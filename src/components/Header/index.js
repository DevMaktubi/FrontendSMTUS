import React from 'react';

import { Container, LoginButton } from './styles';
import {useHistory} from 'react-router-dom';

export default function Header() {
  let history = useHistory();
  return (
    <Container>
      <div>
        <h1>Sistema de Monitoramento e Transparência de Unidades de Saúde</h1>
        <p>Selecione um hospital para iniciar</p>
      </div>
      <LoginButton onClick={() => history.push('/login')}>
        Login Unidade Hospitalar
      </LoginButton>
    </Container>
  );
}
