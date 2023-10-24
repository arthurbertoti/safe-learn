import styled from "styled-components";
import { Themes } from "../../styles/Themes";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10% 10% 10%;
  h1 {
    color: ${Themes.blue}
  }
`

export const ChatContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 60vh;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  border: 1px solid ${Themes.blue};
  border-radius: 10px;
`

export const SelfChatBaloon = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 10px 0;
  p {
    background-color: ${Themes.blue};
    color: ${Themes.white};
    padding: 10px;
    border-radius: 10px;
    max-width: 50%;
    text-align: right;
  }
`

export const OtherChatBaloon = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;
  p {
    background-color: ${Themes.white};
    color: ${Themes.black};
    padding: 10px;
    border-radius: 10px;
    max-width: 50%;
    text-align: left;
  }
`

export const DivInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${Themes.blue};
  }
  button {
    margin-left: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${Themes.blue};
    background-color: ${Themes.blue};
    color: ${Themes.white};
  }
`