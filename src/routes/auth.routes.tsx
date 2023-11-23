import { Route, Routes } from 'react-router-dom'

import { NewUser, NotFound, SignIn } from '../pages'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/create-user" element={<NewUser/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}