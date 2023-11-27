import { Button as ButtonComponent } from "./styles"

interface ButtonProps {
  img?: string
  children: string
  disabled?: boolean
  link?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}
export function Button({
  img,
  children,
  disabled,
  link,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <ButtonComponent disabled={disabled} type={type} onClick={onClick}>
      {children}
    </ButtonComponent>
  )
}
