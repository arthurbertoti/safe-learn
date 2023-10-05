import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react"

import { useNavigate } from "react-router-dom"

type LoginValues = {
  username: string
  password: string
}

type AuthContextType = {
  signed: boolean
  signIn({ username, password }: LoginValues): void
  signOut(): void
  roles: string[] | null
  userName: string | null
  userId: number | null
  scope: string | null
  loginError: string | null
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [scope, setScope] = useState<string | null>(null)
  const [loginError, setLoginError] = useState<string | null>(null)
  const [signed, setSigned] = useState(false)
  const [roles, setRoles] = useState<string[]>([])
  const [userName, setUserName] = useState<string | null>(null)
  const [userId, setUserId] = useState<number | null>(null)
  const [errors, setErrors] = useState("")

  const navigate = useNavigate()

  const signIn = ({ username, password }: LoginValues) => {
    setRoles([])
    setUserName(username)
    if(username === "admin@gmail.com" && password === "1234") {
      setSigned(true)
      setLoginError(null)
      setUserId(1)
      setRoles(["admin"])
      setScope("admin")
      navigate("/")
    } if(username === "user@gmail.com" && password === "1234") {
      setSigned(true)
      setLoginError(null)
      setUserId(2)
      setRoles(["user"])
      setScope("user")
      navigate("/")
    } else {
      setLoginError("Email ou senha inválidos")
    }
  }

  const signOut = () => {
    setSigned(false)
    setRoles([])
    setUserName(null)
    setUserId(null)
    navigate("/login")
  }

  useEffect(() => {
    const token = localStorage.getItem("@token")
    if (token) {
      setSigned(true)
    }
  }, [signed])

  return (
    <AuthContext.Provider
      value={{
        signed,
        signIn,
        signOut,
        scope,
        loginError,
        roles,
        userName,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const useAuthContext = useContext(AuthContext)
  return useAuthContext
}
