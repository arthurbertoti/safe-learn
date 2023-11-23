import { Routes, Route } from "react-router-dom"
import { Home, NotFound } from "../pages"
import { Header } from "../components/Header"
import { NavigationContextProvider  } from "../contexts/NavigationContext"
import { PageUnderConstruction } from "../pages/PageUnderConstruction"
import { About } from "../pages/About"
import { StudentProfile as Student } from "../pages/Student"
import { Chats } from "../pages/Chats"

export function AppRoutes() {
  return (
    <>
      <NavigationContextProvider >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id" element={<Student/>} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavigationContextProvider >
    </>
  )
}
