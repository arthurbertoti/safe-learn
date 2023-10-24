import { Routes, Route } from "react-router-dom"
import { Home, NotFound } from "../pages"
import { Header } from "../components/Header"
import { NavigationContextProvider  } from "../contexts/NavigationContext"
import { PageUnderConstruction } from "../pages/PageUnderConstruction"
import { About } from "../pages/About"
import { Student } from "../pages/Student"

export function AppRoutes() {
  return (
    <>
      <NavigationContextProvider >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student/>} />
          <Route path="/chats" element={<PageUnderConstruction />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavigationContextProvider >
    </>
  )
}
