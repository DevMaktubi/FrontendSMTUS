import styled from 'styled-components';
import search from '../../assets/search.png';

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #FFF;
  align-items: center;
  width: 350px;
  height:680px;
  input {
    display: flex;
    background-image: url(${search}) 7px;
    width: 250px;
    height: 46px;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    color: #B6B6B6;
    margin-left: 10px;
    margin-top: 20px;
    padding-right: 50px;
    border: 1px solid #B6B6B6;
    border-radius: 5px;
    text-align: center;
    
  }
`;

export const HistoryBlock = styled.div`
    height: 130px;
    display: flex;
    width: 100%;
    padding-top: 30px;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E5E5E5;
    transition: all 0.25s;
    div {
      display: flex;
      flex-direction: column;
      h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        color: #3A3A3A;
      }
      p {
        width: 230px;
        height: 60px;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 20px;

        color: #3A3A3A;
      }
    }
    img {
      width: 25px;
      height:25px;
      margin-top: -100px;
    }
    &:hover {
      background-color: #ddd;
      cursor: pointer;
    }

`;
