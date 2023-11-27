import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 490px;
  height: 290px;
  z-index: 10;

  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  

  h1 {
    font-size: 20px;
    font-weight: 400;

    margin: 39px auto 47px;
  }

  b {
    font-weight: 700;
  }
  @media screen and (max-width: 550px) {
    width: 80%;
  }
`

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  width: 100vw;
  height: 100vh;
  background: rgba(118, 118, 118, 0.4);
`

export const ButtonsField = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 30px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    gap: 10px;
  }

  button {
    color: #fff;
    @media screen and (max-width: 480px) {
      width: 100%;
      height: 35px;
      font-size: 12px;
    }
  }
`
