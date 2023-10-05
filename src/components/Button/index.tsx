import { Button as ButtonComponent } from "./styles"

interface ButtonProps {
  img?: string
  children: string
  disabled?: boolean
  link?: string
  type?: "button" | "submit" | "reset" | undefined
}
export function Button({
  img,
  children,
  disabled,
  link,
  type = "button",
}: ButtonProps) {
  return (
    <ButtonComponent disabled={disabled} type={type}>
      {children}
    </ButtonComponent>
  )
}
