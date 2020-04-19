import styled from 'styled-components';

export const Container = styled.div`
  .second {
    position: absolute;
    width: 830px;
    height: 80px;
    left: 150px;
    top: 330px;
    background: rgba(196, 196, 196, 0.15);
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;
    h1 {
      font-size: 14px;
      span {
        color: #7256C8;
      }
    }
  }

  button {
    width: 234px;
    height: 41px;
    position: absolute;
    left: 41%;
    top: 460px;
    bottom: 17.17%;

    background: #4D3CAB;
    box-shadow: 0px 2px 2px rgba(240, 240, 240, 0.2);
    border-radius: 7px;

    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    text-align: center;

    color: #FFFFFF;
    transition: 0.25s all;
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
  > span {
    position: absolute;
    width: 329px;
    height: 18px;
    left: 380px;
    top: 530px;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: rgba(42, 10, 136, 0.75);
  }
`;

export const InternacoesContainer = styled.div`
  position: absolute;
  width: 772px;
  height: 130px;
  left: 150px;
  top: 190px;

  background: rgba(196, 196, 196, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  justify-content: center;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7px;
    width: 100%;
    span {
      color: #7256C8;
      font-size: 17px;
    }
  }
`;
