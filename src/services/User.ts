import { api } from "./api"

export type User = {
  id: string,
  name: string,
  username: string,
  phone: string,
  email: string,
  password: string,
  photo_link: string,
  description: string,
  ano: string,
  materia: string,
  deleted: boolean 
  createdAt: string,
  updatedAt: string
}

export const getUsers = async () => {
  const response = await api.get<User[]>('/users')
  return response.data
}

export const getUser = async (id: string) => {
  const response = await api.get<User>(`/users/${id}`)
  return response.data
}

export const createUser = async (user: User) => {
  const response = await api.post<User>('/users', user)
  return response.data
}

export const updateUser = async (user: User) => {
  const response = await api.put<User>(`/users/${user.id}`, user)
  return response.data
}

