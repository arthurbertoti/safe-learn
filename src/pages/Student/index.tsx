import { Link } from "react-router-dom";
import { Container, Main } from "./style";

export function Student() {
  return (
    <Main>
      <Container>
        <h3>Nome: Alceu Dispor</h3>
        <h3>Email: alceudispordasilva@gmail.com</h3>
        <p>Matérias que o aluno pode ajudar: 
        <span>
          {"Inglês, Matemática, Português, Lógica de Programação: Java"}
        </span>
        </p>
        <Link to="/chats">Conversar com usuário</Link>
      </Container>
    </Main>
  )
}
