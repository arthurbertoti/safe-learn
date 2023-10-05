import styled from "styled-components";

import { Themes } from "../../styles/Themes";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 24px 0 36px 0;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
  align-items: center;
  justify-content: center;
  background-color: ${Themes.white};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  border-radius: 8px;
`

export const LoginTitle = styled.h2`
  padding-top: 24px;
  text-align: center;
  padding-bottom: 24px;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${Themes.blue};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`

export const EyeButton = styled.div`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 70px;
`