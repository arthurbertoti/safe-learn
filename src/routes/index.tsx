import { Routes, Route } from "react-router-dom"
import { Home, Login } from "../pages"

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
