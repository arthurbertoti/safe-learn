import styled from "styled-components";

import { Themes } from "../../styles/Themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 500px;
  align-items: center;
  justify-content: center;
  background-color: ${Themes.white};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
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