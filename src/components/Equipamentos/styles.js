import styled from 'styled-components';

export const Container = styled.div`
`;

export const EquipamentosContainer = styled.div`
  position: absolute;
  width: 900px;
  top: 160px;
  left: 42.5px;
  .infobar{
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    font-weight: bold;
    font-size: 10px;
  }
  .item {
    text-align: center;
    margin-bottom: 15px;
    margin-right: 10px;
    font-size: 8px;
  }

  background: rgba(196, 196, 196, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 7px;
    width: 100%;
    h2 {
      width: 200px;      
    }
    .lastItem {
      margin-right: -35px;
    }
    span {
      color: #7256C8;
      font-size: 17px;
    }
  }
`;
