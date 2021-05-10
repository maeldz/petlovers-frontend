import React, { FormEventHandler, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Content } from './styles'
import api from '../../services/api'
import { signupValidator } from '../../validators'

export const Signup: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const { goBack, push } = useHistory()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const data = { name, email, password, passwordConfirmation }
    const isValid = await signupValidator(data)
    if (isValid) {
      const response = await api.post('users', data)
      if (response.status === 200) {
        push('login')
      }
    }
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <strong>Petlovers</strong>
          <span>Crie sua conta</span>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirme a senha"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <button type="submit">Criar conta</button>
          <button type="button" onClick={() => goBack()}>
            Voltar
          </button>
        </form>
      </Content>
    </Container>
  )
}
