import { useAuth } from "../contexts/AuthContext"

import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"

export function Router() {
  const { signed } = useAuth()

  return signed ? <AppRoutes /> : <AuthRoutes />
}
