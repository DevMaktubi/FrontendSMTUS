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
  width: 1366px;
  height: 625px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #0A1688, #5725ba );
  h1 {
    text-align: center;
    font-size: 40px;
  }
  p {
    font-size: 35px;
    text-align: center;
  }

  .lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;