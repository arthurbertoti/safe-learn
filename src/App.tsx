import { BrowserRouter } from "react-router-dom"

import { Router } from "./routes"

import { GlobalStyles } from "./styles/GlobalStyles"

import { AuthContextProvider } from "./contexts/AuthContext"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
