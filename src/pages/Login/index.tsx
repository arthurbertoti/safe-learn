import { Link } from "react-router-dom"

import { ButtonContainer, Container, LoginForm, LoginTitle } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useState } from "react"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const buttonDisabled = email === "" || password === ""

  function handleSubmit(email: string, password: string) {
    console.log("login pipipipopopo", email, password)
  }

  return (
    <Container>
      <LoginForm
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(email, password)
        }}
      >
        <LoginTitle>Safe Learn</LoginTitle>
        <Input
          label="Email"
          type="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Link to={"/forgot"}>esqueceu a senha?</Link>
        <ButtonContainer>
          <Button disabled={buttonDisabled} type="submit">
            Login
          </Button>
        </ButtonContainer>
        <Link to={"/create-account"}>Não tem uma conta ainda?</Link>
      </LoginForm>
    </Container>
  )
}
