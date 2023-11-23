import { Link, useParams } from "react-router-dom"
import { Container, Main } from "./style"
import { User, getUser } from "../../services/User"
import { useEffect, useState } from "react"

export function StudentProfile() {
  const [user, setUser] = useState<User>()
  const [errors, setErrors] = useState("")
  const { id } = useParams()
  const whatsAppText = "Olá%2C%20tenho%20interesse%20em%20saber%20quais%20horários%20você%20está%20disponível%20para%20dar%20aula%20no%20SafeLearn"
  const emailSubject = "Mentoria%20SafeLearn"
  const emailBody = "Olá%2C%20tenho%20interesse%20em%20saber%20quais%20horários%20você%20está%20disponível%20para%20dar%20mentoria%20no%20SafeLearn"

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
            <Link to={`mailto:${user.email}?subject=${emailSubject}&body=${emailBody}`} target={"_blank"}>Clique aqui para conversar com usuário por email</Link>
            <Link to={`https://wa.me//5551${user.phone}?text=${whatsAppText}`}>
            Clique aqui para conversar com usuário por WhatsApp
            </Link>
          </>
        ) : (
          <h3>Usuário não encontrado</h3>
        )}
      </Container>
    </Main>
  )
}
