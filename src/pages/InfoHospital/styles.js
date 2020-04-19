import styled from 'styled-components';

export const InfoContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', cursive;
  position: absolute;
  width: 1045px;
  height: 570px;
  left: 160px;
  top: 43px;

  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const PageController = styled.div`
  position: absolute;
  width: 1045px;
  height: 150px;
  left: 0;
  top: 0;

  background: linear-gradient(90.13deg, #2E2792 34.54%, #7256C8 99.62%);

  display: flex;

  justify-content: center;
  align-items: center;
  
  flex-direction: column;
  h1 {
    text-align: center;
    width: 494.18px;
    height: 50.12px;
    font-style: normal;
    font-weight: bold;
    font-size: 31px;
    line-height: 59px;

    color: #FFFFFF;
    

  }
  div {
    display: flex;
    justify-content: center;
    h2 {
      width: 229.92px;
      height: 23.7px;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      text-align: center;

      color: #FFFFFF;
      transition: all 0.25s;
    &:hover {
      cursor:pointer;
      opacity: 0.9;
    }
    }
  }
`;