import styled from "styled-components";
import { Themes } from "../../styles/Themes";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 10% 10% 10%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 4%;
  width: 100%;
  gap: 20px;
  background-color: ${Themes.white};
  border: 1px solid ${Themes.blue};
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  color: ${Themes.blue};
  a {
    color: ${Themes.blue};
  }
`

export const DeleteText = styled.span`
  color: ${Themes.red};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
`