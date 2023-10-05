import React, { useState } from 'react'
import { Input } from '../Input'
import { Select } from '../Select'

const data = [
  { nome: "Anom", idade: 19, matérias: ["Português", "Matemática", "Lógica de Programação"] },
  { nome: "Megha", idade: 19, matérias: ["Filosofia", "Inglês", "Português"] },
  { nome: "Subham", idade: 25, matérias: ["Lógica de Programação"] },
]

export function Table() {
  const [searchName, setSearchName] = useState('')
  const [filterSubject, setFilterSubject] = useState('')
  
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
      value: "Eletricidade",
      text: "Eletricidade",
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
      value: "Inglês",
      text: "Inglês",
    },
    {
      value: "Lógica de Programação: Java",
      text: "Lógica de Programação: Java",
    },
    {
      value: "Lógica de Programação: JavaScript",
      text: "Lógica de Programação: JavaScript",
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
    setSearchName(e.target.value)
  }

  const filteredData = data.filter((item) => {
    return (
      item.nome.toLowerCase().includes(searchName.toLowerCase()) &&
      (filterSubject === '' || item.matérias.includes(filterSubject))
    )
  })

  return (
    <div>
      <div>
        <label htmlFor="nameInput">Buscar por Nome:</label>
        <Input
          type="text"
          id="nameInput"
          value={searchName}
          onChange={handleNameChange} label={''} />
      </div>
      <div>
        <label htmlFor="subjectSelect">Filtrar por Matéria:</label>
        <Select
          id="subjectSelect"
          options={allSubjects}
          data={filterSubject}
          setData={setFilterSubject}
          inputArrow={false}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Matérias</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.nome}</td>
                <td>{val.idade}</td>
                <td>{val.matérias.join(', ')}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}