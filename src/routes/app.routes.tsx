import { Routes, Route } from "react-router-dom"
import { Home, NotFound } from "../pages"
import { Header } from "../components/Header"

export function AppRoutes() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}
