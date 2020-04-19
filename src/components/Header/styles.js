import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  display: flex;
  background: linear-gradient(to right, #0A1688, #5725ba );
  margin: 0;
  justify-content: space-between;
  padding: 30px;
  height: 90px;
  width: 100%;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    width: 380px;
    margin-left: 45px;
    height: 50px;
    justify-content: center;
    align-items: left;
    h1 {
      font-family: 'Raleway', cursive;
      font-size: 21px;
      width: 100%;
      height: 50px;
      color: #FFFFFF;
      font-weight: "bold";
      line-height: 25px;
    }
    p {
      font-family: 'Raleway', cursive;
      font-size: 18px;
      margin-top: 7px;
      color: #eee;
      font-weight: 100;
    }
  }
`;

export const LoginButton = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', cursive;
  display: flex;
  width: 270px;
  color: #FFF;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #A289F0;
  border-radius: 5px;
  font-size: 21px;
  line-height: 26px;
  margin-top: -30px;
  margin-right: 5%;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;