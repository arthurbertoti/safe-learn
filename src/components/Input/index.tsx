import { ChangeEvent } from "react"

import {
  Container,
  Input as InputComponent,
  Label as LabelComponent,
} from "./styles"

interface InputProps {
  id: string
  label: string
  type: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ id, label, type, onChange }: InputProps) {
  return (
    <Container>
      <LabelComponent htmlFor={id}>{label}</LabelComponent>
      <InputComponent onChange={onChange} type={type} id={id} />
    </Container>
  )
}
