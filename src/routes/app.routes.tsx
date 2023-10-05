import { Routes, Route } from "react-router-dom"
import { Home, NotFound } from "../pages"
import { Header } from "../components/Header"
import { NavigationContextProvider  } from "../contexts/NavigationContext"
import { PageUnderConstruction } from "../pages/PageUnderConstruction"
import { About } from "../pages/About"

export function AppRoutes() {
  return (
    <>
      <NavigationContextProvider >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<PageUnderConstruction/>} />
          <Route path="/chats" element={<PageUnderConstruction />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavigationContextProvider >
    </>
  )
}
