import styled from 'styled-components';

export const ContatoContainer = styled.div`
  p {
    position: absolute;
    top: 145px;
    left: 265px;
    color: rgba(42, 10, 136, 0.75);
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const CardHorizontal = styled.div`
  position: absolute;
  height: 170px;
  top: 190px;
  width: 400px;
  left: 100px;
  background: rgba(196, 196, 196, 0.35);
  &:last-child {
    margin-top: 195px;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    text-align: left;
    margin-left: 20px;
    line-height: 22px;

    /* preto */

    color: #333333;
  }
  > div {
    width: 370px;
    height: 100px;
    text-align: left;
    margin-left: 30px;
    h2 {
      font-size: 14px;
      font-weight: 400;
    }
    .extended {
      font-size: 14px;
      height: 50px;
      font-weight: 400;
    }
  }
`;

export const CardVertical = styled.div`
  position: absolute;
  height: 370px;
  top: 190px;
  width: 300px;
  left: 650px;
  background: rgba(196, 196, 196, 0.35);
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 22px;
    text-align: center;

    /* preto */

    color: #333333;
  }
  h2 {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 30px;
    }
`;