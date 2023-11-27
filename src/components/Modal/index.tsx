import { Dispatch, SetStateAction, useRef, useState } from "react"
import ReactDom from "react-dom"

import { useClickOutside } from "../../hooks/useClickOutside"

import { Button } from "../Button"
import { Background, ButtonsField, ModalContainer } from "./style"
import { deleteUser } from "../../services/User"
import { useNavigate } from "react-router-dom"

type Modal = {
  id: number
  setOpenModal: Dispatch<SetStateAction<boolean>>
}


export const Modal = ({ id, setOpenModal }: Modal) => {
  const [errors, setErrors] = useState("")
  const navigate = useNavigate()

  const handleConfirmDelete = async (id: number) => {
    try {
      const response = await deleteUser(Number(id))
      console.log(response)
    } catch (err: any) {
      setErrors(err.response.data)
    }
    setOpenModal(false)
    navigate('/')
  }

  const actionRef = useRef<HTMLDivElement>(null)
  useClickOutside(actionRef, () => console.log("click outside"))
  return ReactDom.createPortal(
    <Background onClick={(e) => e.stopPropagation()}>
      <ModalContainer ref={actionRef} onClick={(e) => e.stopPropagation()}>
        <h1>Tem certeza que deseja deletar o usuário?</h1>
        <ButtonsField>
          <Button onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
          <Button
            onClick={() => {
              handleConfirmDelete(id)
            }}
          >
            Confirmar
          </Button>
        </ButtonsField>
      </ModalContainer>
    </Background>,
    document.getElementById("portal") as Element
  )
}
