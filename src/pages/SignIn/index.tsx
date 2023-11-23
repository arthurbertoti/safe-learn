import { FormEvent, useState } from "react"
// eslint-disable-next-line
import { Link } from "react-router-dom"

import { useAuth } from "../../contexts/AuthContext"

import {
  ButtonContainer,
  Container,
  EyeButton,
  InputContainer,
  LoginForm,
  LoginTitle,
} from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import openEyeIcon from "../../assets/icons/eye-open-icon.svg"
import closedEyeIcon from "../../assets/icons/eye-closed-icon.svg"

export function SignIn() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [eyeVisibility, setEyeVisibility] = useState(false)
  const [eyeIcon, setEyeIcon] = useState(openEyeIcon)
  const [errors, setErrors] = useState<string | null>("")
  const [errorNotification, setErrorNotification] = useState(false)
  const { signIn, loginError } = useAuth()

  const buttonDisabled = username === "" || password === ""

  useState(() => {
    setErrors(loginError)
    setErrorNotification(true)
  })

  function handleSubmit(e: FormEvent, username: string, password: string) {
    e.preventDefault()

    if (!buttonDisabled) {
      signIn({ username, password })
    }
  }

  const changeVisibility = () => {
    setEyeVisibility(!eyeVisibility)
    if (eyeVisibility) {
      setEyeIcon(closedEyeIcon)
    } else {
      setEyeIcon(openEyeIcon)
    }
    const input = document.querySelector('input[name="password"]')
    if (input) {
      if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text")
      } else {
        input.setAttribute("type", "password")
      }
    }
  }

  return (
    <Container>
      <LoginForm
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(e, username, password)
        }}
      >
        <LoginTitle>Safe Learn</LoginTitle>
        <InputContainer>
          <Input
            width="80%"
            label="Email"
            type="email"
            id="email"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            width="80%"
            label="Password"
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <EyeButton
            onClick={(e: any) => {
              e.preventDefault()
              changeVisibility()
            }}
          >
            <img src={eyeIcon} alt="ícone de visibilidade de senha" />
          </EyeButton>
        </InputContainer>
        <ButtonContainer>
          <Button disabled={buttonDisabled} type="submit">
            Login
          </Button>
        </ButtonContainer>
        <Link to="/create-user">Criar novo usuário</Link>
        {errors != null && errorNotification && <span>{loginError}</span>}
      </LoginForm>
    </Container>
  )
}
