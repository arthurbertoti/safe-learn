import { Route, Routes } from 'react-router-dom'

import { NotFound, SignIn } from '../pages'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}