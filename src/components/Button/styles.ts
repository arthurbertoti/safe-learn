import styled from 'styled-components';
import { Themes } from '../../styles/Themes';

export const Button = styled.button`
  width: 100%;
  border-radius: 12px;
  border: 2px solid ${Themes.white};
  padding: 16px;
  font-size: 16px;
  color: ${Themes.black};
  background: ${Themes.blue};
  transition: border-color 0.2s;
  outline: none;
  cursor: pointer;
  &:hover {
    border-color: ${Themes.blue};
    background: ${Themes.white};
    color: ${Themes.blue};
  }
  &:disabled {
    border-color: ${Themes.gray};
    background: ${Themes.gray};
    color: ${Themes.black};
  }
`;
