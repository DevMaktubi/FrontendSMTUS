import styled from 'styled-components';

export const AtendimentoContainer = styled.form`
  position: absolute;
  width: 1045px;
  height: 570px;
  left: 146px;
  top: 43px;

  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  .full {
    position: absolute;
    display: flex;
    flex-direction: column;
    
    top: 120px;
    left: 70px;
    label {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */


      color: #6F6F6F;
      margin-bottom: 10px;
    }
    input {
      width: 875px;
      height: 45px;
      border: 1px solid #DADADA;
      border-radius: 5px;
    }
  }
  .splitted {
    position: absolute;
    display: flex;
    top: 210px;
    left: 70px;
    color: #CBCBCB;
    div {
      display: flex;
      flex-direction: column;  
      label {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */


      color: #6F6F6F;
      margin-bottom: 10px;
    }
    color: #CBCBCB;
      input {
        width: 250px;
        height: 45px;
        border: 1px solid #DADADA;
        border-radius: 5px;
        margin-right: 30px;

        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        
        padding-left: 20px;
        
      }
    }
  }
  .doisporum{
    position: absolute;
    display: flex;
    top: 300px;
    left: 70px;
    div {
      display: flex;
      flex-direction: column;  
      label {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */


        color: #6F6F6F;
        margin-bottom: 10px;
      }
      input {
        width: 270px;
        height: 45px;
        border: 1px solid #DADADA;
        border-radius: 5px;
        margin-right: 32px;
      }
      .extended {
        width: 573px;
      }
    }
  }

  .umpordois{
    position: absolute;
    display: flex;
    top: 400px;
    left: 70px;
    div {
      display: flex;
      flex-direction: column;  
      label {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */


        color: #6F6F6F;
        margin-bottom: 10px;
      }
      input {
        width: 250px;
        height: 45px;
        border: 1px solid #DADADA;
        border-radius: 5px;
        margin-right: 60px;
      }
      .extended {
        width: 560px;
      }
    }
  }
  button {
    position: absolute;
    top: 510px;
    left: 420px;
    width: 250px;
    height: 40px;

    background: #4D3CAB;
    box-shadow: 0px 2px 2px rgba(240, 240, 240, 0.2);
    border-radius: 5px;

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
`;

export const Title = styled.div`
  position: absolute;
  width: 1045px;
  height: 100px;
  left: 0;
  top: 0;

  background: linear-gradient(90.13deg, #2E2792 34.54%, #7256C8 99.62%);

  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 53px;
  text-align: center;

  color: #FFFFFF;

  transform: matrix(1, 0, 0, 1, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;
