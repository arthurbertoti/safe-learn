import styled from 'styled-components';
import { Themes } from '../../styles/Themes';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: ${Themes.gray};
  flex-direction: column;

  a {
    text-decoration: none;
  }
`;