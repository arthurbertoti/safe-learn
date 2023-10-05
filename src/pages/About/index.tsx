import { Container } from "../PageUnderConstruction/style"

export function About() {
  return (
    <Container>
      <h1>SOBRE</h1>
      <br />
      <p>
        Esta é uma aplicação desenvolvida para a disciplina de Projetos II
        do curso Técnico de Informática do IFSul Campus Sapiranga.{" "}
      </p>
      <br />
      <p>
        O objetivo do projeto é desenvolver uma aplicação web para conectar alunos novos na escola com alunos veteranos, para que os veteranos possam ajudar os novos alunos a se adaptarem ao ambiente escolar e também ao novo conteúdo técnico que será aprendido.
      </p>
      <br />
      <p>
        Desenvolvido por:{" "}
        <a href="https://github.com/arthurbertoti" target="_blank" rel="noreferrer">
          Arthur Gabriel Bertoti
        </a>{" "}
        e{" "}
        <a href="https://github.com/Kaue0" target="_blank" rel="noreferrer">
          Kauê Rafael Piangers da Fonseca
        </a>
      </p>
    </Container>
  )
}
