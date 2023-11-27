import { Link, useParams } from "react-router-dom"
import { Container, DeleteText, Main } from "./style"
import { User, deleteUser, getUser } from "../../services/User"
import { useEffect, useState } from "react"
import { Modal } from "../../components/Modal"

export function StudentProfile() {
  const [user, setUser] = useState<User>()
  const [errors, setErrors] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const { id } = useParams()
  const whatsAppText = "Olá%2C%20tenho%20interesse%20em%20saber%20quais%20horários%20você%20está%20disponível%20para%20dar%20aula%20no%20SafeLearn"
  const emailSubject = "Mentoria%20SafeLearn"
  const emailBody = "Olá%2C%20tenho%20interesse%20em%20saber%20quais%20horários%20você%20está%20disponível%20para%20dar%20mentoria%20no%20SafeLearn"

  const handleGetUser = async () => {
    try {
      const response = await getUser(Number(id))
      setUser(response.user)
    } catch (err: any) {
      setErrors(err.response.data)
    }
  }

  useEffect(() => {
    handleGetUser()
  }, [])

  const handleDeleteUser = () => {
    setOpenModal(true)
  }

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
            <Link to={`/student/edit/${id}`}>EDITAR USUÁRIO</Link>
            <DeleteText onClick={handleDeleteUser}>DELETAR USUÁRIO</DeleteText>
          </>
        ) : (
          <h3>Usuário não encontrado</h3>
        )}
      </Container>
      {openModal && <Modal id={Number(id)} setOpenModal={setOpenModal} />}
    </Main>
  )
}


