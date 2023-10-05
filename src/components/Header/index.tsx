import { useAuth } from "../../contexts/AuthContext"

export function Header() {
  const { userName } = useAuth()
  return (
    <header>
      <h1>Header</h1>
      <h2>{userName}</h2>
    </header>
  )
}