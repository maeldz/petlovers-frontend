import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../services/api'
import defaultAvatar from '../assets/images/default-avatar.jpg'

type User = {
  id: number
  name: string
  email: string
  avatar: any
}

type LoginResponse = {
  user: User
  token: string
}

interface AuthContextData {
  signed: boolean
  signIn(email: string, password: string): Promise<void>
  signOut(): Promise<void>
  updateProfile(data: Omit<User, 'id'>): Promise<void>
  user: User
  token: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const initialUser = {} as User

  const [user, setUser] = useState(initialUser)
  const [token, setToken] = useState('')

  api.defaults.headers.Authorization = `Bearer ${token}`

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      const response = await api.post<LoginResponse>('sessions', {
        email,
        password,
      })
      if (response.data) {
        const { user: userData, token: userToken } = response.data
        localStorage.setItem('@petlovers:user', JSON.stringify(userData))
        localStorage.setItem('@petlovers:token', userToken)
        api.defaults.headers.Authorization = `Bearer ${userToken}`
        setUser({
          ...userData,
          avatar: !userData.avatar ? { url: defaultAvatar } : userData.avatar,
        })
        setToken(userToken)
      } else {
        toast.error('Email ou senha inválidos, tente novamente!')
      }
    } catch (error) {
      const { status } = error.response
      if (status === 401) {
        toast.error('Email ou senha inválidos, tente novamente!')
      } else {
        toast.error('Falha no servidor, tente novamente mais tarde!')
      }
    }
  }

  const signOut = async (): Promise<void> => {
    localStorage.clear()
    setUser(initialUser)
    setToken('')
  }

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const storagedUser = localStorage.getItem('@petlovers:user')
      const storagedToken = localStorage.getItem('@petlovers:token') || ''

      if (storagedUser) {
        setUser(JSON.parse(storagedUser))
        setToken(storagedToken)
      }
    }

    loadStorageData()
  }, [])

  const updateProfile = async (data: Omit<User, 'id'>): Promise<void> => {
    localStorage.setItem('@petlovers:user', JSON.stringify(data))
    setUser({
      ...data,
      id: user.id,
    })
  }

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const storagedUser = localStorage.getItem('@petlovers:user')
      const storagedToken = localStorage.getItem('@petlovers:token') || ''

      if (storagedUser) {
        setUser(JSON.parse(storagedUser))
        setToken(storagedToken)
      }
    }

    loadStorageData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signed: !!user?.name,
        user,
        token,
        signIn,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext)
}
