import { Link } from "react-router-dom"

import { Container, LoginForm, LoginTitle } from "./styles"

export function Login() {
  return (
    <Container>
      <LoginForm
        onSubmit={() => {
          console.log("login pipipipopopo")
        }}
      >
        <LoginTitle>Safe Learn</LoginTitle>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />
        <Link to={"/forgot"}>esqueceu a senha?</Link>
        <button type="submit">Login</button>
        <Link to={"/create-account"}>Não tem uma conta ainda?</Link>
      </LoginForm>
    </Container>
  )
}
