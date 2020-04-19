import styled from 'styled-components';

const transformColor = leitosUsados => {
  return `rgba(${leitosUsados * 3}, ${leitosUsados * 1}, ${leitosUsados * 0.5})`
}

export const InfoBox = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  font-family: 'Raleway', cursive;
  text-align: center;
  width: 250px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 60px;
    height: 60px;
    border: 0;
    border-radius: 50%;
    background-color: #ccc;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90px;
    
    h4 {
      width: 145px;
      height: 12px;
      font-size: 12px;
      font-weight: bold;
      line-height: 10px;
    }
    p {
      font-weight: 500;
      font-size: 10px;
      line-height: 10px;
      letter-spacing: 0.12em;
      strong {
      color: ${props => transformColor(props.leitosUsados)};
      font-weight: bold;
    }
    }
  }
`;

export const WarningMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 35px;
  }
`;