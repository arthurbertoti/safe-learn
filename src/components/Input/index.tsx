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
  name?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ id, label, type, name, onChange }: InputProps) {
  return (
    <Container>
      <LabelComponent htmlFor={id}>{label}</LabelComponent>
      <InputComponent onChange={onChange} type={type} id={id} name={name} />
    </Container>
  )
}
