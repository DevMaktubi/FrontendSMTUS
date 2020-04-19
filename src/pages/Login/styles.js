import styled from 'styled-components';

export const LoginContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', cursive;
  position: absolute;
  width: 534px;
  height: 509px;
  left: 416px;
  top: 70px;
  background: linear-gradient(90deg, #2E2792 47.22%, #7256C8 104.21%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    button {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 50px;
        img {
        width: 50px;
        height: 50px;
        color: #000;
      }
    }
  }
  div > h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    text-align: center;

    color: #E5E5E5;
  }
  p {
    width: 330px;
    height: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: #E5E5E5;
  }
  div {
    display: flex;
    flex-direction: column;
    input {
      width: 412px;
      height: 47px;
      background: #FFFFFF;
      border: 1px solid #B6B6B6;
      border-radius: 5px;
      padding-left: 20px;
      &:first-child {
        margin-bottom: 22px;
      }
    }
    margin-bottom: 13px;

  }
  h6 {
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #E5E5E5;

    margin-bottom: 13px;

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
  }
  button {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    width: 150px;
    height: 40px;
    background: #7256C8;
    border: 1px solid #7256C8;
    border-radius: 5px;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    margin-top: -20px;

    color: #E5E5E5;
  }
`;
