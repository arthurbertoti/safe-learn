import { Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { NavigationContextProvider  } from "../contexts/NavigationContext"
import { About, Chats, Home, NotFound, PageUnderConstruction, StudentProfile as Student, EditStudent } from "../pages"

export function AppRoutes() {
  return (
    <>
      <NavigationContextProvider >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id" element={<Student/>} />
          <Route path="/student/edit/:id" element={<EditStudent/>} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavigationContextProvider >
    </>
  )
}
