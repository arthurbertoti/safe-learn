import { Link, useParams } from "react-router-dom"
import { Container, Main } from "./style"
import { User, getUser } from "../../services/User"
import { useEffect, useState } from "react"

export function StudentProfile() {
  const [user, setUser] = useState<User>()
  const [errors, setErrors] = useState("")
  const { id } = useParams()

  const handleGetUser = async () => {
    try {
      const response = await getUser(Number(id))
      setUser(response.user)
      console.log(response) 
      console.log(user) 
    } catch (err: any) {
      setErrors(err.response.data.error_description)
    }
  }

  useEffect(() => {
    handleGetUser()
  }, [])

  return (
    <Main>
      <Container>
        {user ? (
          <>
            <h3>Nome: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <p>
              Matéria que o aluno pode ajudar:
              <span> {user.materia}</span>
            </p>
            <Link to="/chats">Conversar com usuário</Link>
          </>
        ) : (
          <h3>Usuário não encontrado</h3>
        )}
      </Container>
    </Main>
  )
}
