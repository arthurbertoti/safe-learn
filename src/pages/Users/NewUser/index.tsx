import { Link, useNavigate, useParams } from "react-router-dom"
import {
  Alert,
  CreateUserForm,
  Container,
  Title,
  InputContainer,
  EyeButton,
  ButtonContainer,
  SubTitle,
} from "./style"
import { NewUser, createUser } from "../../../services/User"
import { FormEvent, useEffect, useState } from "react"

import openEyeIcon from "../../../assets/icons/eye-open-icon.svg"
import closedEyeIcon from "../../../assets/icons/eye-closed-icon.svg"
import { Button, Input, Select } from "../../../components"
import { allSubjects } from "../../../data/allSubjects"

export function NewUserComponent() {
  const [user, setUser] = useState<NewUser>()
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [photo_link, setPhotoLink] = useState("")
  const [description, setDescription] = useState("")
  const [ano, setAno] = useState("")
  const [materia, setMateria] = useState("")
  const [eyeVisibility, setEyeVisibility] = useState(false)
  const [eyeIcon, setEyeIcon] = useState(openEyeIcon)
  const [errors, setErrors] = useState<string | null>("")
  const navigate = useNavigate()

  const buttonDisabled =
    username === "" ||
    password === "" ||
    name === "" ||
    email === "" ||
    phone === "" ||
    ano === "" ||
    materia === ""

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setUser({
      name: name,
      username: username,
      phone: phone,
      email: email,
      password: password,
      photo_link: photo_link,
      description: description,
      ano: ano,
      materia: materia,
    })

    if (!buttonDisabled && user) {
      handleCreateUser(user)
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

  const handleCreateUser = async (user: NewUser) => {
    if (user) {
      try {
        await createUser(user)
        navigate('/')
      } catch (err: any) {
        setErrors(err.response.data)
      }
    }
  }

  useEffect(() => {
    setErrors(null)
  }, [username, password, name, email, phone, ano, materia])

  return (
    <Container>
      <CreateUserForm
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(e)
        }}
      >
        <div>
          <Title>Novo usuário</Title>
          <SubTitle>* = obrigatório</SubTitle>
        </div>
        <InputContainer>
          <Input
            label="Nome completo*"
            type="text"
            id="name"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Nome de usuário*"
            type="text"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Telefone sem DDI (ex.: +55) nem DDD (ex.: 51)*"
            type="number"
            id="phone"
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Seu ano atual*"
            type="number"
            id="ano"
            onChange={(e) => {
              setAno(e.target.value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <Select
            id="materia"
            label="Matéria que você se dispõe a ajudar*"
            placeholder="Todas as Matérias"
            options={allSubjects}
            data={materia}
            setData={setMateria}
            inputArrow={false}
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Link para foto de usuário"
            type="text"
            id="photo_link"
            onChange={(e) => {
              setPhotoLink(e.target.value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Breve descrição sua"
            type="text"
            id="description"
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Email*"
            type="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Password*"
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
            Criar Usuário
          </Button>
        </ButtonContainer>
        <Link to="/">Login</Link>
        {errors != null && <Alert>{errors}</Alert>}
      </CreateUserForm>
    </Container>
  )
}
