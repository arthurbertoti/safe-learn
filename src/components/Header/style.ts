import styled from "styled-components";
import { Themes } from "../../styles/Themes";

interface ButtonWrapperProps {
  active?: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  width: 90%;
  height: 150px;
  margin: 25px auto 75px auto;
  align-items: center;
  justify-content: center;
  background-color: ${Themes.white};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  border: 1px solid ${Themes.blue};
  border-radius: 8px;
`

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${Themes.white};
  color: ${Themes.blue};
  font-weight: 800;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: ${Themes.blue};
    color: ${Themes.white};
  }
`

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${Themes.blue};
  background-color: ${Themes.white};
  :hover {
    background-color: ${Themes.blue};
    color: ${Themes.white};
  }
`

export const ActiveButton = styled(Button)`
  background-color: ${Themes.blue};
  color: ${Themes.white};
`