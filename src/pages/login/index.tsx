import React, { FormEventHandler, useState } from 'react'
import { useAuth } from '../../contexts/auth'
import { Header } from '../../components'
import { Container, Content } from './styles'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    signIn(email, password)
  }

  return (
    <Container>
      <Header />
      <Content>
        <form onSubmit={handleSubmit}>
          <strong>Faça seu login</strong>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">ENTRAR</button>
        </form>
      </Content>
    </Container>
  )
}
