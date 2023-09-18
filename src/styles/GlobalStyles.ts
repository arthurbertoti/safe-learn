import { createGlobalStyle } from 'styled-components'
import { Themes } from './Themes'

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Monserrat', sans-serif;
  font-weight: 400;
}

body,
#root {
  min-height: 100vh;
  overflow: hidden;
}



#root {
  background: ${Themes.gray};
  background-repeat: no-repeat;
  background-size: calc(120vh / 2);
  background-position: center right;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;


}

@media (max-width: 768px) {
  #root {
    background: ${Themes.gray};
  }
}
`
