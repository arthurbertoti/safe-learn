import { useState } from "react"
import { Input, Select } from "../"
import {
  Container,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "./style"
import chatImg from "../../assets/chat.png"

const usersData = [
  {
    nome: "Anom",
    ano: 2,
    matérias: ["Português", "Matemática", "Lógica de Programação: Java"],
  },
  { nome: "Megha", ano: 2, matérias: ["Filosofia", "Inglês", "Português"] },
  { nome: "Subham", ano: 2, matérias: ["Lógica de Programação: Python"] },
  {
    nome: "João",
    ano: 3,
    matérias: ["Matemática", "Física", "Química", "Biologia"],
  },
  { nome: "Maria", ano: 4, matérias: ["Português", "Inglês", "Artes"] },
  {
    nome: "Pedro",
    ano: 1,
    matérias: [
      "Matemática",
      "Física",
      "Inglês",
      "Lógica de Programação: Python",
    ],
  },
  { nome: "Luisa", ano: 3, matérias: ["Biologia", "Química", "Sociologia"] },
  {
    nome: "Carlos",
    ano: 2,
    matérias: ["História", "Geografia", "Educação Física"],
  },
  { nome: "Ana", ano: 3, matérias: ["Educação Física", "Artes", "Redes"] },
  {
    nome: "Rafael",
    ano: 4,
    matérias: [
      "Inglês",
      "Matemática",
      "Português",
      "Lógica de Programação: Java",
    ],
  },
  {
    nome: "Isabela",
    ano: 3,
    matérias: ["Biologia", "Química", "Dispositivos Móveis"],
  },
  {
    nome: "Julia",
    ano: 2,
    matérias: ["Matemática", "Física", "Lógica de Programação: Php"],
  },
  {
    nome: "Lucas",
    ano: 4,
    matérias: ["História", "Geografia", "Sistemas para Servidores"],
  },
  {
    nome: "Mariana",
    ano: 3,
    matérias: [
      "Lógica de Programação: Java",
      "Lógica de Programação: JS",
      "Matemática",
    ],
  },
  {
    nome: "Fernanda",
    ano: 1,
    matérias: ["Sociologia", "Filosofia", "Eletricano"],
  },
  {
    nome: "Gustavo",
    ano: 1,
    matérias: ["Banco de Dados", "Redes", "Sistemas para Servidores", "Inglês"],
  },
  {
    nome: "Daniel",
    ano: 2,
    matérias: ["Educação Física", "Artes", "Biologia"],
  },
  { nome: "Camila", ano: 3, matérias: ["Biologia", "Química", "Português"] },
  {
    nome: "Sophia",
    ano: 2,
    matérias: ["Português", "Inglês", "Matemática", "Física"],
  },
  {
    nome: "Matheus",
    ano: 4,
    matérias: ["Matemática", "Inglês", "Sociologia", "Eletricano"],
  },
]

export function Table() {
  const [searchData, setSearchData] = useState("")
  const [filterSubject, setFilterSubject] = useState("")

  const allSubjects = [
    {
      value: "",
      text: "Todas as Matérias",
    },
    {
      value: "Artes",
      text: "Artes",
    },
    {
      value: "Banco de Dados",
      text: "Banco de Dados",
    },
    {
      value: "Biologia",
      text: "Biologia",
    },
    {
      value: "Dispositivos Móveis",
      text: "Dispositivos Móveis",
    },
    {
      value: "Eletricano",
      text: "Eletricano",
    },
    {
      value: "Educação Física",
      text: "Educação Física",
    },
    {
      value: "Física",
      text: "Física",
    },
    {
      value: "Filosofia",
      text: "Filosofia",
    },
    {
      value: "Geografia",
      text: "Geografia",
    },
    {
      value: "História",
      text: "História",
    },
    {
      value: "Inglês",
      text: "Inglês",
    },
    {
      value: "Lógica de Programação: Java",
      text: "Lógica de Programação: Java",
    },
    {
      value: "Lógica de Programação: JS",
      text: "Lógica de Programação: JS",
    },
    {
      value: "Lógica de Programação: Php",
      text: "Lógica de Programação: Php",
    },
    {
      value: "Lógica de Programação: Python",
      text: "Lógica de Programação: Python",
    },
    {
      value: "Matemática",
      text: "Matemática",
    },
    {
      value: "Português",
      text: "Português",
    },
    {
      value: "Química",
      text: "Química",
    },
    {
      value: "Redes",
      text: "Redes",
    },
    {
      value: "Sistemas para Servidores",
      text: "Sistemas para Servidores",
    },
    {
      value: "Sociologia",
      text: "Sociologia",
    },
  ]

  const handleNameChange = (e: any) => {
    setSearchData(e.target.value)
  }

  const filteredData = usersData.filter((item) => {
    if (searchData === "") {
      return filterSubject === "" || item.matérias.includes(filterSubject)
    } else if (isNaN(Number(searchData))) {
      return (
        item.nome.toLowerCase().includes(searchData.toLowerCase()) &&
        (filterSubject === "" || item.matérias.includes(filterSubject))
      )
    } else {
      return (
        item.ano.toString() === searchData &&
        (filterSubject === "" || item.matérias.includes(filterSubject))
      )
    }
  })

  return (
    <Container>
      <div>
        <Input
          id="searchData"
          type="text"
          name="searchData"
          label="Buscar por nome ou ano"
          value={searchData}
          onChange={handleNameChange}
        />
      </div>
      <TableContainer>
        <TableHeader>
          <TableHeaderCell width={"3"}>Nome</TableHeaderCell>
          <TableHeaderCell width={"10"}>ano</TableHeaderCell>
          <TableHeaderCell width={"70"}>
            <Select
              id="subjectSelect"
              options={allSubjects}
              data={filterSubject}
              setData={setFilterSubject}
              inputArrow={false}
            />
          </TableHeaderCell>
        </TableHeader>
        <TableBody>
          {filteredData.map((val, key) => {
            return (
              <TableRow key={key}>
                <TableCell width={"3"}>{val.nome}</TableCell>
                <TableCell width={"10"}>{val.ano}</TableCell>
                <TableCell width={"70"}>{val.matérias.join(", ")}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </TableContainer>
    </Container>
  )
}
