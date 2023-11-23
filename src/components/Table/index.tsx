import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { User, getUsers } from "../../services/User"

import { Input, Select } from "../"
import {
  Container,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  InputContainer,
  TableHeaderRow,
} from "./style"
import { allSubjects } from "../../data/allSubjects"

export function Table() {
  const [data, setData] = useState<User[]>([])
  const [searchData, setSearchData] = useState("")
  const [filterSubject, setFilterSubject] = useState("")
  const [errors, setErrors] = useState("")
  const navigate = useNavigate()

  const handleGetUsers = async () => {
    try {
      const response = await getUsers()
      setData(response)
    } catch (err: any) {
      setErrors(err.response.data.error_description)
    }
  }

  useEffect(() => {
    handleGetUsers()
  }, [])

  const handleNameChange = (e: any) => {
    setSearchData(e.target.value)
  }

  const filteredData = data?.filter((item: User) => {
    if (searchData === "") {
      return filterSubject === "" || item.materia.includes(filterSubject)
    } else if (isNaN(Number(searchData))) {
      return (
        item.name.toLowerCase().includes(searchData.toLowerCase()) &&
        (filterSubject === "" || item.materia.includes(filterSubject))
      )
    } else {
      return (
        item.ano.toString() === searchData &&
        (filterSubject === "" || item.materia.includes(filterSubject))
      )
    }
  })

  return (
    <Container>
      <InputContainer>
        <Input
          width="80%"
          id="searchData"
          type="text"
          name="searchData"
          label="Buscar por nome ou ano"
          value={searchData}
          onChange={handleNameChange}
        />
      </InputContainer>
      <TableContainer>
        <TableHeader>
          <TableHeaderRow>
            <TableHeaderCell width={"20"}>Nome</TableHeaderCell>
            <TableHeaderCell width={"10"}>ano</TableHeaderCell>
            <TableHeaderCell width={"70"}>
              <Select
                id="subjectSelect"
                placeholder="Todas as Matérias"
                options={allSubjects}
                data={filterSubject}
                setData={setFilterSubject}
                inputArrow={false}
              />
            </TableHeaderCell>
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((user: User, key: number) => {
            return (
              <TableRow
                key={key}
                onClick={() => {
                  navigate(`/student/${user.id}`)
                }}
              >
                <TableCell width={"20"}>{user.name}</TableCell>
                <TableCell width={"10"}>{user.ano}</TableCell>
                <TableCell width={"70"}>{user.materia}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </TableContainer>
    </Container>
  )
}